import React from "react";

import Footer from "./Footer";
import Header from "./Header";

import { Component } from "react";
import { render } from "react-dom";

import Form from "react-jsonschema-form";

const schema = {
	title: "JSON resume ! Create your custom resume",
	type: "object",
	required: ["title"],
	properties:
	{
		basics:
		{
			type: "object",
			title: "Basic Info",
			properties:
			{
				name: {type: "string", title: "Name"},
				label: {type: "string", title: "Label"},
				picture: {type: "string", title: "Picture"},
				email: {type: "string", title: "Email"},
				phone: {type: "string", title: "Phone No."},
				website: {type: "string", title: "Website"},
				summary: {type: "string", title: "Summary"},
				location: {type: "object", title: "Location", properties:
				{
					address: {type: "string", title: "Address"},
					postalCode: {type: "string", title: "Postal Code"},
					city: {type: "string", title: "Summary"},
					countryCode: {type: "string", title: "Country Code"},
					region: {type: "string", title: "Summary"},
				}
			},

		}
	},
	profiles:
	{
		type: "object",
		title: "Profiles",
		properties:
		{
			listOfProfiles:
			{
				type: "array",
				title: "A list of Profiles",
				minItems: 2,
				items: {
					type: "object",
					properties:
					{
						username: {type: "string", title: "User Name"},
						url: {type: "string", title: "URL"},
						network: {type: "string", title: "Network"},
					}
				}
			}
		}
	},
	works:
	{
		type: "object",
		title: "Work Experience",
		properties:
		{
			listOfWorks:
			{
				type: "array",
				title: "A list of experience",
				minItems: 1,
				items: {
					type: "object",
					properties:
					{
						company: {type: "string", title: "Company"},
						position: {type: "string", title: "Position"},
						website: {type: "string", title: "Website"},
						startDate: {type: "string", title: "Start Date (YY-MM-DD)"},
						endDate: {type: "string", title: "End Date (YY-MM-DD)"},
						summary: {type: "string", title: "Summary"},
						highlights: {
							type: "array",
							items: {type: "string", title: "Highlights"},
						}
					}
				}
			}
		}
	},
	volunteerships:
	{
		type: "object",
		title: "Volunteer Experience",
		properties:
		{
			listOfVolunteer:
			{
				type: "array",
				title: "A list of experience",
				items: {
					type: "object",
					properties:
					{
						company: {type: "string", title: "Organization"},
						position: {type: "string", title: "Position"},
						website: {type: "string", title: "Website"},
						startDate: {type: "string", title: "Start Date (YY-MM-DD)"},
						endDate: {type: "string", title: "End Date (YY-MM-DD)"},
						summary: {type: "string", title: "Summary"},
						highlights: {
							type: "array",
							items: {type: "string", title: "Highlights"},
						}
					}
				}
			}
		}
	},
	educations:
	{
		type: "object",
		title: "Education",
		properties:
		{
			listOfEducations:
			{
				type: "array",
				title: "A list of education experience",
				items: {
					type: "object",
					properties:
					{
						university: {type: "string", title: "University"},
						field: {type: "string", title: "Field of Study"},
						degree: {type: "string", title: "Type of Degree"},
						startDate: {type: "string", title: "Start Date (YY-MM-DD)"},
						endDate: {type: "string", title: "End Date (YY-MM-DD)"},
						gpa: {type: "string", title: "GPA"},
						courses: {
							type: "array",
							items: {type: "string", title: "Courses"},
						}
					}
				}
			}
		}
	},
	awards:
	{
	  type: "object",
	  title: "Awards",
	  properties:
	  {
	    listOfAwards:
	    {
	      type: "array",
	      title: "A list of Awards",
	      items: {
	        type: "object",
	        properties:
	        {
	          title: {type: "string", title: "Name of the Award"},
	          awarder: {type: "string", title: "Awarder"},
	          summary: {type: "string", title: "Summary of the award"},
	          date: {type: "string", title: "Start Date (YY-MM-DD)"},
	        }
	      }
	    }
	  }
	},
	publications:
	{
	  type: "object",
	  title: "Publications",
	  properties:
	  {
	    listOfPublications:
	    {
	      type: "array",
	      title: "A list of Publications",
	      items: {
	        type: "object",
	        properties:
	        {
	          title: {type: "string", title: "Title of the Publication"},
	          publisher: {type: "string", title: "Publisher"},
	          summary: {type: "string", title: "Summary of the award"},
	          website: {type: "string", title: "Website"},
	          releaseDate: {type: "string", title: "Start Date (YY-MM-DD)"},
	        }
	      }
	    }
	  }
	},
	skills:
	{
	  type: "object",
	  title: "Skills",
	  properties:
	  {
	    listOfSkills:
	    {
	      type: "array",
	      title: "A list of Skills",
	      items: {
	        type: "object",
	        properties:
	        {
	          name: {type: "string", title: "Name of the Skill"},
	          level: {type: "string", title: "Level of the Skill"},
						keywords: {
							type: "array",
							items: {type: "string", title: "Keywords"},
						}
	        }
	      }
	    }
	  }
	},
	languages:
	{
	  type: "object",
	  title: "Languages",
	  properties:
	  {
	    listOfAwards:
	    {
	      type: "array",
	      title: "A list of Known Languages",
	      items: {
	        type: "object",
	        properties:
	        {
	          name: {type: "string", title: "Name of the Language"},
	          level: {type: "string", title: "Level of Expertise"},
	        }
	      }
	    }
	  }
	},
	interests:
	{
	  type: "object",
	  title: "Interests",
	  properties:
	  {
	    listOfSkills:
	    {
	      type: "array",
	      title: "A list of Interests",
	      items: {
	        type: "object",
	        properties:
	        {
	          name: {type: "string", title: "Name of the Interest"},
						keywords: {
							type: "array",
							items: {type: "string", title: "Keywords"},
						}
	        }
	      }
	    }
	  }
	},
	references:
	{
	  type: "object",
	  title: "References",
	  properties:
	  {
	    listOfAwards:
	    {
	      type: "array",
	      title: "A list of Known References",
	      items: {
	        type: "object",
	        properties:
	        {
	          name: {type: "string", title: "Name of the Reference"},
	          reference: {type: "string", title: "Reference string"},
	        }
	      }
	    }
	  }
	},
	title2: {type: "string", title: "Secondary task !"},
	done: {type: "boolean", title: "Done?"},
}
};


export default class Layout extends React.Component {
	constructor() {
		super();
		this.state = {
			title: "Welcome, this is ReactJS",
		};
	}

	changeTitle(title) {
		this.setState({title});
	}

	render() {
		return (
			<Form schema={schema}
			/>
		);
	}
}
