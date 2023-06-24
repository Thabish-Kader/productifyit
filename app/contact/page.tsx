import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

const Contact = () => {
	return (
		<>
			<Navbar />
			<main className="mx-auto px-5 max-w-7xl text-white space-y-2 my-12">
				<h1>Contact Us</h1>

				<p>
					We appreciate your interest in our web app. If you have any
					questions, feedback, or need assistance, please feel free to
					get in touch with us using the contact information below:
				</p>

				<h2>Contact Information</h2>
				<ul>
					<li>
						<strong>Email:</strong> kadertabish@gmail.com
					</li>
				</ul>

				<h2>Contact Form</h2>
				<p>
					You can also reach us by filling out the contact form below.
					We will get back to you as soon as possible.
				</p>
				<form className=" w-[500px]  bg-black/30 p-4 mt-2 border border-blue-500">
					<div>
						<label htmlFor="name">Name</label>
						<input
							className="bg-transparent border border-blue-500 rounded-lg mx-2"
							type="text"
							id="name"
							name="name"
							required
						/>
					</div>
					<br />
					<br></br>
					<div>
						<label htmlFor="email">Email:</label>
						<input
							className="bg-transparent border border-blue-500 rounded-lg mx-2"
							type="email"
							id="email"
							name="email"
							required
						/>
					</div>
					<br />
					<br />

					<label htmlFor="message">Message:</label>
					<br />
					<textarea
						id="message"
						name="message"
						className="bg-transparent border border-blue-500 rounded-lg mx-2"
						rows={5}
						required
					></textarea>
					<br />
					<br />

					<button className="btn" type="submit" value="Submit">
						Submit
					</button>
				</form>
			</main>
			<Footer />
		</>
	);
};

export default Contact;
