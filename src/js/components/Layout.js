import React from "react";

import Footer from "./Footer";
import Header from "./Header";

import { Component } from "react";
import { render } from "react-dom";

import Form from "react-jsonschema-form";

const schema = {
	title: "Todo App - To keep a track of things to be done !",
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
    			name: {type: "string", title: "Name", default: "John Doe"},
    			label: {type: "string", title: "Label", default: "Programmer"},
    			picture: {type: "string", title: "Picture", default: "abc.jpg"},
    			email: {type: "string", title: "Email", default: "john.doe@gmail.com"},
    			phone: {type: "string", title: "Phone No.", default: "(912) 555-4321"},
    			website: {type: "string", title: "Website", default: "www.johndoe.com"},
    			summary: {type: "string", title: "Summary", default: "A summary of John Doe"},
    			location: {type: "object", title: "Location", properties:
	    			{
	    				address: {type: "string", title: "Address", default: "2712 Broadway St"},
	    				postalCode: {type: "string", title: "Postal Code", default: "CA 94115"},
	    				city: {type: "string", title: "Summary", City: "San Francisco"},
	    				countryCode: {type: "string", title: "Country Code", default: "US"},
	    				region: {type: "string", title: "Summary", Region: "California"},
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
  				listOfProfiles: {
					type: "array",
					title: "A list of Profiles",
					items: {
						type: "object",
						properties:
						{
							username: {type: "string", title: "User Name", default: "CA 94115"},
	    					url: {type: "string", title: "URL", City: "San Francisco"},
	    					network: {type: "string", title: "Network", default: "2712 Broadway St"},
						}
					}
				}
  			}
  		},
   		title2: {type: "string", title: "Secondary task !", default: "Another task"},
   		done: {type: "boolean", title: "Done?", default: false},
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
        onChange={alert("changed")}
        onSubmit={alert("submitted")}
        onError={alert("errors")} />
    );
  }
}
