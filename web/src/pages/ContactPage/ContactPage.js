import { 
	Form, 
	TextField, 
	TextAreaField, 
	Submit,
	FieldError,
	Label,
	useMutation,
	FormError,
} from "@redwoodjs/web"

import { Link, routes } from "@redwoodjs/router"

import { useSessionStorage } from "../../hooks/useSessionStorage"

import { Button, Row, Col, FormFeedback, Breadcrumb, BreadcrumbItem } from "reactstrap"

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

	const [onHome, setOnHome] = useSessionStorage("onHome", false); 
	const [onContact, setOnContact] = useSessionStorage("onContact", true);

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

	function home() {
		setOnHome(!onHome)
		setOnContact(!onContact)
	}

	return ( 
		<BlogLayout>
				<div className="mt-3">
				<Breadcrumb>
						<BreadcrumbItem><Link to={routes.home()}><i className="fas fa-home" onClick={home}></i></Link></BreadcrumbItem>
						<BreadcrumbItem active><i className="fas fa-envelope"></i></BreadcrumbItem>
				</Breadcrumb>
				</div>
				<Form
					className="fade-up-and-in-animation" 
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
					<Row className="mb-2">
						<Col className="justify-content-center" xs={{size: 7, offset: 0}} lg={{ size: 5, offset: 3 }}>
						<Label 
							name="email" 
							errorClassName="error" 
							style={{ display: 'block' }}>
							Leave your email and I'll write to you
						</Label>
						</Col>
					</Row>
					<Row>
						<Col className="justify-content-center mr-0 pr-0" xs={{size: 7, offset: 0}} lg={{ size: 5, offset: 3 }}>
						<TextField
							name="email" 
							validation={{ 
								required: "Please enter your email",
							}} 
							errorClassName="email-field"
							className="email-field"
							placeholder="Type your email..."
							style={{ 'text-indent': '1rem'}}
						/>
						<FieldError name="email" style={{ display: 'block' }}/>
						</Col>
						<Col className="ml-0 pl-0">
							<Button color="success"
									style={{
										'height': '2.55rem',
										'borderTopLeftRadius': '0rem',
										'borderBottomLeftRadius': '0rem'
									}}>
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
