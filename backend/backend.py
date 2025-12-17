from http.server import HTTPServer, BaseHTTPRequestHandler
import json
from datetime import datetime
import smtplib
import requests
from email.mime.text import MIMEText  # ✅ FIXED: MIMEText not MimeText
import logging

# Setup logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(message)s')
logger = logging.getLogger()

def save_to_file(contact_data):
    try:
        import os
        
        # Create data folder structure
        year = datetime.now().strftime('%Y')
        month = datetime.now().strftime('%m_%B')  # "01_January"
        
        data_folder = "data"
        year_folder = os.path.join(data_folder, year)
        
        # Create folders if they don't exist
        os.makedirs(year_folder, exist_ok=True)
        
        filename = f"{month}.json"
        filepath = os.path.join(year_folder, filename)
        
        enhanced_data = contact_data.copy()
        enhanced_data['id'] = datetime.now().strftime('%Y%m%d%H%M%S')
        enhanced_data['source'] = 'website_form'
        
        with open(filepath, 'a', encoding='utf-8') as f:
            f.write(json.dumps(enhanced_data, ensure_ascii=False) + '\n')
        
        logger.info(f"💾 Data saved to {filepath}")
        return True
    except Exception as e:
        logger.error(f"❌ Failed to save file: {str(e)}")
        return False

def send_telegram(contact_data):
    """📱 Sends instant notification to Telegram"""
    try:
        # 🔧 USE YOUR ACTUAL CREDENTIALS
        BOT_TOKEN = "8197066589:AAF8z4Q_cCzwYq6E6_k7KXYRA5Y0pHF5Cs4"  # Your real token
        CHAT_ID = "1308376680"  # Your chat ID from earlier
        
        message = f"""
🚀 NEW CONTACT FORM SUBMISSION

👤 Name: {contact_data['name']}
📧 Email: {contact_data['email']}
📞 Phone: {contact_data['phone'] or 'Not provided'}
💬 Message: {contact_data['message']}
⏰ Time: {contact_data['timestamp']}

Immediate follow-up recommended!
        """
        
        # ✅ FIXED: Use BOT_TOKEN variable, not direct token in URL
        url = f"https://api.telegram.org/bot{BOT_TOKEN}/sendMessage"
        payload = {
            'chat_id': CHAT_ID,
            'text': message
        }
        
        response = requests.post(url, json=payload, timeout=10)
        
        if response.status_code == 200:
            logger.info("📱 Telegram notification sent!")
            return True
        else:
            logger.error(f"❌ Telegram failed: {response.text}")
            return False
    except Exception as e:
        logger.error(f"❌ Telegram error: {str(e)}")
        return False
    
def send_email(contact_data):
    """📧 Sends email notification"""
    try:
        # 🔧 GMAIL CONFIGURATION
        SMTP_SERVER = "smtp.gmail.com"
        SMTP_PORT = 465  # SSL port
        EMAIL_FROM = "enhanzers.devuse@gmail.com"
        EMAIL_PASSWORD = "gnnwlxxmmgegrblg"
        EMAIL_TO = "yogeshsenthil142@gmail.com"
        
        subject = f"🚀 New Contact Form: {contact_data['name']}"
        body = f"""
New Contact Form Submission from msjtraders.com:

Name: {contact_data['name']}
Email: {contact_data['email']}
Phone: {contact_data['phone'] or 'Not provided'}
Time: {contact_data['timestamp']}

Message:
{contact_data['message']}

----------------------------------------------------------------
MSJ Traders Website / Team enhanzers
        """
        
        msg = MIMEText(body)
        msg['Subject'] = subject
        msg['From'] = EMAIL_FROM
        msg['To'] = EMAIL_TO
        
        # ✅ FIXED: Use SMTP_SSL for port 465
        server = smtplib.SMTP_SSL(SMTP_SERVER, SMTP_PORT)  # SMTP_SSL instead of SMTP
        server.login(EMAIL_FROM, EMAIL_PASSWORD)
        server.send_message(msg)
        server.quit()
        
        logger.info("📧 Email sent successfully!")
        return True
    except Exception as e:
        logger.error(f"❌ Email failed: {str(e)}")
        return False

class ContactHandler(BaseHTTPRequestHandler):
    def _send_response(self, status_code, data):
        self.send_response(status_code)
        self.send_header('Content-Type', 'application/json')
        self.send_header('Access-Control-Allow-Origin', '*')
        self.end_headers()
        self.wfile.write(json.dumps(data).encode('utf-8'))
    
    def do_OPTIONS(self):
        self.send_response(200)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.end_headers()
    
    def do_POST(self):
        if self.path == '/contact':
            try:
                content_length = int(self.headers['Content-Length'])
                post_data = self.rfile.read(content_length)
                form_data = json.loads(post_data)
                
                name = form_data.get('name', '').strip()
                email = form_data.get('email', '').strip()
                phone = form_data.get('phone', '').strip()
                message = form_data.get('message', '').strip()
                
                if not name or not email or not message:
                    self._send_response(400, {'success': False, 'message': 'Please fill all required fields'})
                    return
                
                contact_data = {
                    'timestamp': datetime.now().strftime('%Y-%m-%d %H:%M:%S'),
                    'name': name,
                    'email': email,
                    'phone': phone,
                    'message': message
                }
                
                # 🎯 TRIPLE NOTIFICATION SYSTEM
                save_to_file(contact_data)
                send_telegram(contact_data) 
                send_email(contact_data)
                
                self._send_response(200, {
                    'success': True, 
                    'message': 'Thank you for your message! We will get back to you soon.'
                })
                
                logger.info(f"✅ New submission from {name}")
                
            except Exception as e:
                logger.error(f"❌ Server error: {str(e)}")
                self._send_response(500, {'success': False, 'message': 'Server error'})

def run_server():
    port = 8000
    server = HTTPServer(('localhost', port), ContactHandler)
    
    print("-" * 50)
    print("🚀 MSJ TRADERS BACKEND STARTED!")
    print(f"📍 http://localhost:{port}")
    print("📞 Endpoint: /contact")
    print("-" * 50)
    print("Press Ctrl+C to stop")
    
    server.serve_forever()

if __name__ == '__main__':
    run_server()