const steps = [
    {
      id: "Greet",
      message: "Hello, Welcome to our health care platform.",
      trigger: "Name",
    },
    {
      id: "Name",
      message: "Please enter your name.",
      trigger: "waiting1",
    },
    {
      id: "waiting1",
      user: true,
      trigger: "issues",
    },
    {
      id: "issues",
      message: "What health issue are you facing?",
      trigger: "healthIssue",
    },
    {
      id: "healthIssue",
      user: true,
      trigger: "processing",
    },
    {
      id: "processing",
      message: "Thank you for providing the information. We are processing your request.",
      trigger: "confirmAssistance",
    },
    {
      id: "confirmAssistance",
      message: "Do you need further assistance with this issue?",
      trigger: "additionalAssistanceOptions",
    },
    {
      id: "additionalAssistanceOptions",
      options: [
        { value: "yes", label: "Yes", trigger: "issues" },
        { value: "no", label: "No", trigger: "endConversation" },
      ],
    },
    {
      id: "endConversation",
      message: "Thank you for using our health care platform. Have a great day!",
      end: true,
    },
  ];
  
  export default steps;
  