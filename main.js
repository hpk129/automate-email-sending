const AWS = require('aws-sdk');

AWS.config.update({
  region: 'ap-south-1'
});

const ses = new AWS.SES();

exports.handler = async (event) => {
  const params = {
    Destination: {
      ToAddresses: [
        'gurparveen1972@gmail.com',
        'aichpiikay@gmail.com',
        'harmanpreet066btcse22@igdtuw.ac.in'
      ]
    },
    Message: {
      Subject: { Data: 'Test Email' },
      Body: {
        Text: { Data: 'Hello,\nI am being sent from the AWS Lambda function.' }
      }
    },
    Source: 'hpkaur.129@gmail.com'
  };

  try {
    const data = await ses.sendEmail(params).promise();
    console.log('Successfully sent email:', data.MessageId);
    return { statusCode: 200, body: 'Email sent successfully' };
  } catch (error) {
    console.error('Error sending email:', error);
    return { statusCode: 500, body: 'Failed to send email' };
  }
};