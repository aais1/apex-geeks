import nodemailer from 'nodemailer';
import { readMultipartFormData } from 'h3';
import fs from 'fs';
import path from 'path';

export default eventHandler(async (event) => {
	if (event.req.method !== 'POST') {
		return { status: 405, message: 'Method Not Allowed' };
	}

	// Read form data including file
	const formData = await readMultipartFormData(event);
	const formFields = {};
	let attachment = null;

	for (const field of formData) {
		if (field.filename) {
			// If a file is uploaded, store it temporarily
			const tempFilePath = path.join('/tmp', field.filename);
			fs.writeFileSync(tempFilePath, field.data);
			attachment = {
				filename: field.filename,
				path: tempFilePath
			};
		} else {
			// Store form fields
			formFields[field.name] = field.data;
		}
	}

	const {
		firstName,
		lastName,
		email,
		phone,
		company,
		website,
		projectSummary
	} = formFields;

	const transporter = nodemailer.createTransport({
		host: 'smtp.zoho.com',
		port: 465,
		secure: true,
		auth: {
			user: 'info@apexgeeks.dev',
			pass: 'mJN8h9ZDfDz8'
		}
	});

	const mailOptions = {
		from: 'info@apexgeeks.dev',
		to: 'info@apexgeeks.dev',
		subject: 'New Proposal Request',
		text: `New Proposal Request:

First Name: ${firstName}
Last Name: ${lastName}
Email: ${email}
Phone: ${phone}
Company: ${company}
Website: ${website}
Project Summary: ${projectSummary}`,
		attachments: attachment ? [attachment] : []
	};

	try {
		await transporter.sendMail(mailOptions);

		// Clean up the temporary file after sending
		if (attachment) {
			fs.unlinkSync(attachment.path);
		}

		return { status: 200, message: 'Proposal sent successfully' };
	} catch (error) {
		return { status: 500, message: 'Error sending email', error };
	}
});
