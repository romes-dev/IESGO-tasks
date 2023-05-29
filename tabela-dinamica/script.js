// Define the available courses for each field of study
const courses = {
    arts: ['Art History', 'Fine Arts', 'Music', 'Theater'],
    education: ['Early Childhood Education', 'Elementary Education', 'Special Education'],
    law: ['Civil Law', 'Criminal Law', 'Constitutional Law'],
    'public-safety': ['Criminal Justice', 'Emergency Management', 'Forensic Science'],
    nursing: ['Registered Nursing', 'Practical Nursing', 'Pediatric Nursing'],
    psychology: ['General Psychology', 'Clinical Psychology', 'Counseling Psychology']
  };
  
  // Get references to the HTML elements
  const fieldSelect = document.getElementById('field-select');
  const coursesList = document.getElementById('courses-list');
  
  // Add an event listener to the field select element
  fieldSelect.addEventListener('change', function() {
    // Get the selected field value
    const selectedField = fieldSelect.value;
  
    // Clear the courses list
    coursesList.innerHTML = '';
  
    // Generate and display the available courses for the selected field
    const selectedCourses = courses[selectedField];
    if (selectedCourses) {
      for (let i = 0; i < selectedCourses.length; i++) {
        const courseItem = document.createElement('p');
        courseItem.textContent = selectedCourses[i];
        coursesList.appendChild(courseItem);
      }
    }
  });
  