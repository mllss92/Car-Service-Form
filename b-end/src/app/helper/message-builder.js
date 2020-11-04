module.exports = (email, data) => {
  return {
    to: email,
    subject: 'We have a new job!',
    html: `
    <h2>Congratulations, we have a new Job!</h2>
<hr>
<span>Info about job:</span>
<ol>
  <li>Car brands: <strong>${data.mark}</strong></li>
  <li>Car model: <strong>${data.model}</strong></li>
  <li>Year of manufacture: <strong>${data.year}</strong></li>
  <li>Details: <span>${data.details}</span>
  </li>
  <li>Repair category: <strong>${data.category}</strong></li>
  <li>Repair subcategory: <strong>${data.subcategory}</strong></li>
  <li>Emirate: <strong>${data.emirate}</strong></li>
  <li>Area: <strong>${data.area}</strong></li>
  <li>Is there a need to tow the car: <strong>${data.needTow}</strong></li>
  <li>Is there a need for a pickup: <strong>${data.needPickup}</strong></li>
  <li>Is there a need for a custom parts: <strong>${data.customParts}</strong></li>
  <li>Desired date of repait: <strong>${data.date}</strong></li>
</ol>
    `
  }
}