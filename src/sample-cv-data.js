import { v4 as uuidv4 } from 'uuid';

const data = {
  personal: {
    name: 'Clay Hart',
    title: 'Computer Science Student',
    phone: '0409852358',
    email: 'clay.hart@uqconnect.edu.au',
    location: 'Brisbane, Australia'
  },
  description:
    'I am a second year computer science student whose loves the challenge of building and deploying new web apps using a variety of different technologies. This app is a basic CV template builder created using React and Typescript. Please see my github for more examples of my work.',
  experience: [
    {
      id: uuidv4(),
      position: 'Software Engineer',
      company: 'A Software Company',
      startDate: '2018',
      endDate: 'Present',
      desc: 'Ut fugiat minim qui voluptate culpa. Elit nostrud ex ad incididunt incididunt eiusmod. Officia cupidatat culpa commodo nisi nostrud.'
    },
    {
      id: uuidv4(),
      position: 'Graduate Engineer',
      company: 'My First Company',
      startDate: '2017',
      endDate: '2018',
      desc: 'Irure dolor incididunt sint et ullamco. Commodo laboris amet aliquip incididunt do ut est exercitation reprehenderit magna sit laboris est mollit.'
    },
    {
      id: uuidv4(),
      position: 'Teacher',
      company: 'University',
      startDate: '2015',
      endDate: '2017',
      desc: 'Enim elit aliquip fugiat anim proident.'
    }
  ],
  education: [
    {
      id: uuidv4(),
      course: 'Bachelor of Science',
      university: 'QUT',
      startDate: '2017',
      endDate: '2018'
    },
    {
      id: uuidv4(),
      course: 'Bachelor of Computer Science',
      university: 'University of Queensland',
      startDate: '2021',
      endDate: 'Present'
    }
  ]
};

export default data;
