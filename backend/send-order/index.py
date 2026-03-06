"""Отправка заявки с сайта ЭкоКомфорт на почту infoekokomfort@bk.ru"""
import json
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

CORS_HEADERS = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
}

def handler(event: dict, context) -> dict:
    if event.get('httpMethod') == 'OPTIONS':
        return {'statusCode': 200, 'headers': CORS_HEADERS, 'body': ''}

    try:
        body = json.loads(event.get('body') or '{}')
        name = body.get('name', '').strip()
        phone = body.get('phone', '').strip()
        service = body.get('service', '').strip()
        message = body.get('message', '').strip()

        if not name or not phone:
            return {
                'statusCode': 400,
                'headers': CORS_HEADERS,
                'body': json.dumps({'error': 'Имя и телефон обязательны'}, ensure_ascii=False)
            }

        smtp_password = os.environ.get('SMTP_PASSWORD', '')
        from_email = 'infoekokomfort@bk.ru'
        to_email = 'infoekokomfort@bk.ru'

        msg = MIMEMultipart('alternative')
        msg['Subject'] = f'Новая заявка с сайта — {name}'
        msg['From'] = from_email
        msg['To'] = to_email

        html = f"""
        <html>
        <body style="font-family: Arial, sans-serif; background: #f4f4f4; padding: 20px;">
          <div style="max-width: 600px; margin: 0 auto; background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <div style="background: linear-gradient(135deg, #16a34a, #1d4ed8); padding: 30px; text-align: center;">
              <h1 style="color: white; margin: 0; font-size: 24px;">🛡️ ЭкоКомфорт</h1>
              <p style="color: rgba(255,255,255,0.8); margin: 8px 0 0;">Новая заявка с сайта</p>
            </div>
            <div style="padding: 30px;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #666; width: 140px;"><b>Имя:</b></td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #333;">{name}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #666;"><b>Телефон:</b></td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #eee;"><a href="tel:{phone}" style="color: #16a34a; font-size: 18px; font-weight: bold;">{phone}</a></td>
                </tr>
                {"<tr><td style='padding: 12px 0; border-bottom: 1px solid #eee; color: #666;'><b>Услуга:</b></td><td style='padding: 12px 0; border-bottom: 1px solid #eee; color: #333;'>" + service + "</td></tr>" if service else ""}
                {"<tr><td style='padding: 12px 0; color: #666;'><b>Сообщение:</b></td><td style='padding: 12px 0; color: #333;'>" + message + "</td></tr>" if message else ""}
              </table>
              <div style="margin-top: 24px; padding: 16px; background: #f0fdf4; border-radius: 8px; border-left: 4px solid #16a34a;">
                <p style="margin: 0; color: #166534;">⏱️ Позвоните клиенту в течение 15 минут для подтверждения заявки.</p>
              </div>
            </div>
          </div>
        </body>
        </html>
        """

        msg.attach(MIMEText(html, 'html', 'utf-8'))

        with smtplib.SMTP_SSL('smtp.mail.ru', 465) as server:
            server.login(from_email, smtp_password)
            server.sendmail(from_email, to_email, msg.as_string())

        return {
            'statusCode': 200,
            'headers': CORS_HEADERS,
            'body': json.dumps({'success': True, 'message': 'Заявка отправлена'})
        }

    except Exception as e:
        return {
            'statusCode': 500,
            'headers': CORS_HEADERS,
            'body': json.dumps({'error': str(e)})
        }