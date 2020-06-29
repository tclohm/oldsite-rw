import { 
	Form, 
	TextField, 
	TextAreaField, 
	Submit,
	FieldError,
	Label,
	useMutation,
	FormError
} from "@redwoodjs/web"

import { Button, Row, Col, FormFeedback } from "reactstrap"

import { useForm } from "react-hook-form"

import BlogLayout from "src/layouts/BlogLayout"

const CREATE_CONTACT = gql`
	mutation CreateContactMutation($input: CreateContactInput!) {
		createContact(input: $input) {
			id
		}
	}
`

const ContactPage = (props) => {
	const formMethods = useForm()

	const [create, { loading, error }] = useMutation(CREATE_CONTACT, {
		onCompleted: () => {
			alert("Thank you for your submission!")
			formMethods.reset()
		}
	})

	const onSubmit = (data) => {
		create({ variables: { input: data }})
		console.log(data)
	}

	return ( 
		<BlogLayout>
				<Form 
					onSubmit={onSubmit} 
					validation={{ mode: "onBlur" }} 
					error={error}
					formMethods={formMethods}>
					<Row>
						<Col xs={{ size: 10 }}>
							<FormError
									error={error}
									wrapperStyle={{ color: "red", backgroundColor: "lavenderblush" }} 
								/>
						</Col>
					</Row>
					<Row className="mb-3">
						<Col xs={{ offset: 4 }}>
							<Label 
								name="name" 
								errorClassName="error"
								style={{ display: 'block' }}>
								Name
							</Label>
							<TextField 
								name="name"
								validation={{ required: "Please enter your name" }} 
								errorClassName="error"
							/>
							<FieldError name="name" className="error"/>
						</Col>
					</Row>
					<Row className="mb-3">
						<Col xs={{ offset: 4 }}>
						<Label 
							name="email" 
							errorClassName="error" 
							style={{ display: 'block' }}>
							Email
						</Label>
						<TextField 
							name="email" 
							validation={{ 
								required: "Please enter your email",
							}} 
							errorClassName="error"
						/>
						<FieldError name="message"/>
						</Col>
					</Row>
					<Row>
						<Col xs={{ offset: 4 }}>
						<Label 
							name="message" 
							errorClassName="error" 
							style={{ display: 'block' }}>
							Message
						</Label>
						<TextAreaField 
							name="message" 
							validation={{ required: 'Please enter a message' }}
							errorClassName="error"
						/>
						<FieldError name="message" />
						</Col>
					</Row>
					<Row>
						<Col xs={{ offset: 4 }}>
						<Button color="success">
							<Submit

								style={{ backgroundColor: 'transparent', border: '0px' }}>
									<i className="far fa-paper-plane"style={{ color: 'white' }}>
									</i>
							</Submit>
						</Button>
						</Col>
					</Row>
				</Form>
		</BlogLayout>
	)
}

export default ContactPage
