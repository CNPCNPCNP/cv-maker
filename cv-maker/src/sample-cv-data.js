import { v4 as uuidv4 } from 'uuid';

const data = {
  personal: {
    name: 'Clay Hart',
    title: 'Software Developer',
    phone: '01234 567890',
    email: 'clay.hart@uqconnect.edu.au',
    location: 'Brisbane, Australia'
  },
  description:
    'I am a computer science student looking for new and exciting challenges in the software development space. As demonstrated by this webpage, I am capable of working with modern Javascript frameworks to implement any functionality you need.',
  experience: [
    {
      id: uuidv4(),
      position: 'Software Engineer',
      company: 'Any Software Company',
      startDate: '2022',
      endDate: 'Present',
      desc: 'Ut fugiat minim qui voluptate culpa. Elit nostrud ex ad incididunt incididunt eiusmod. Officia cupidatat culpa commodo nisi nostrud.'
    },
    {
      id: uuidv4(),
      position: 'Graduate Engineer',
      company: 'My First Company',
      startDate: '2017',
      endDate: '2020',
      desc: 'Irure dolor incididunt sint et ullamco. Commodo laboris amet aliquip incididunt do ut est exercitation reprehenderit magna sit laboris est mollit.'
    },
    {
      id: uuidv4(),
      position: 'Tutor',
      company: 'University',
      startDate: '2015',
      endDate: '2017',
      desc: 'Enim elit aliquip fugiat anim proident.'
    }
  ],
  education: [
    {
      id: uuidv4(),
      course: 'Bachelor of Computer Science',
      university: 'University of Queensland',
      startDate: '2021',
      endDate: 'Present'
    },
    {
      id: uuidv4(),
      course: 'Bachelor of Science',
      university: 'Queensland University of Technology',
      startDate: '2015',
      endDate: '2017'
    }
  ]
};

export default data;
