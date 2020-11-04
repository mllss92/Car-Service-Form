const data = {
  categories: [
    { value: 'body', content: 'Body repair' },
    { value: 'engine', content: 'Engine repair' },
    { value: 'chassis', content: 'Сhassis repair' },
    { value: 'electronics', content: 'Electronics repair' },
  ],

  subcategories: {
    body: [
      { value: 'car painting', content: 'Car painting' },
      { value: 'welding works', content: 'Welding works' },
      { value: 'auto straightening', content: 'Auto straightening' },
    ],
    engine: [
      { value: 'cylinder head', content: 'Cylinder head repair' },
      { value: 'engine block', content: 'Engine block repair' },
      { value: 'fuel pump', content: 'Fuel pump repair' },
    ],
    chassis: [
      { value: 'suspension system', content: 'Suspension system repair' },
      { value: 'suspension system diagnostics', content: 'Suspension system diagnostics' },
      { value: 'wheels changing', content: 'Wheels changing' },
    ],
    electronics: [
      { value: 'computer diagnostics', content: 'Сomputer diagnostics' },
      { value: 'replacement sensor', content: 'Replacement sensor' },
      { value: 'electrical wiring', content: 'Electrical wiring repair' },
    ]
  },

  emirates: [
    { value: 'Abu Dhabi', content: 'Abu Dhabi' },
    { value: 'Ajman', content: 'Ajman' },
    { value: 'Dubai', content: 'Dubai' },
    { value: 'Fujairah', content: 'Fujairah' },
    { value: 'Ras Al Khaimah', content: 'Ras Al Khaimah' },
    { value: 'Sharjah', content: 'Sharjah' },
    { value: 'Umm Al Quwain', content: 'Umm Al Quwain' }
  ],

  areas: [
    { value: 'Some area1', content: 'Some area 1' },
    { value: 'Some area2', content: 'Some area 2' },
    { value: 'Some area3', content: 'Some area 3' },
    { value: 'Some area4', content: 'Some area 4' }
  ]
}

module.exports = data;