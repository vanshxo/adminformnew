

"use client"; 

import { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import Label from "./Label";
import './EventForm.css'; 

const EventForm = () => {
  const [formData, setFormData] = useState({
    uid: "",
    name: "",
    eventOrgCode: "",
    category: "",
    descPdfLink: "",
    description: "",
    imageLink: "",
    problemStatement: "",
    prizeMoney: 0,
    date: "",
    regLink: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/events", { // Assuming you have an API route to handle this
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to create event");
      }

      const result = await response.json();
      console.log("Event created successfully:", result);
      
      setFormData({
        uid: "",
        name: "",
        eventOrgCode: "",
        category: "",
        descPdfLink: "",
        description: "",
        imageLink: "",
        problemStatement: "",
        prizeMoney: 0,
        date: "",
        regLink: "",
      });
    } catch (error) {
      console.error("Error creating event:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex">
      <div>
        <Label>UID</Label>
        <Input
                  type="text"
                  name="uid"
                  value={formData.uid}
                  onChange={handleChange}
                  required label={""}        />
      </div>
      <div>
        <Label>Name</Label>
        <Input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required label={""}
        />
      </div>
      <div>
        <Label>Event Org Code</Label>
        <Input
          type="text"
          name="eventOrgCode"
          value={formData.eventOrgCode}
          onChange={handleChange}
          required label={""}
        />
      </div>
      <div>
        <Label>Category</Label>
        <Input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
          required label={""}
        />
      </div>
      <div>
        <Label>PDF Description Link</Label>
        <Input
          type="url"
          name="descPdfLink"
          value={formData.descPdfLink}
          onChange={handleChange}
          required label={""}
        />
      </div>
      <div>
        <Label>Description</Label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          required 
          className="border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <Label>Image Link</Label>
        <Input
          type="url"
          name="imageLink"
          value={formData.imageLink}
          onChange={handleChange}
          required label={""}
        />
      </div>
      <div>
        <Label>Problem Statement</Label>
        <Input
          type="text"
          name="problemStatement"
          value={formData.problemStatement}
          onChange={handleChange}
          required label={""}
        />
      </div>
      <div>
        <Label>Prize Money</Label>
        <Input
          type="number"
          name="prizeMoney"
          value={formData.prizeMoney}
          onChange={handleChange}
          required label={""}
        />
      </div>
      <div>
        <Label>Date</Label>
        <Input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required label={""}
        />
      </div>
      <div>
        <Label>Registration Link</Label>
        <Input
          type="url"
          name="regLink"
          value={formData.regLink}
          onChange={handleChange}
          required label={""}
        />
      </div>
      <Button type="submit">Create Event</Button>
    </form>
  );
};

export default EventForm;

