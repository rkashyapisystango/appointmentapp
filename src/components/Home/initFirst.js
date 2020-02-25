export function initializeData(initilize){
  initilize({
    title: '',
    companyName: '',
    companyStreet: '',
    companyCity: '',
    comments: '',
    timeSelected: '00:00',
    date: new Date(),
  });
}

export function initializeEditableData(initilize, editData){
  initilize({
    title: editData.jobTitle,
    companyName:  editData.companyName,
    companyStreet:  editData.companyStreet,
    companyCity:  editData.companyCity,
    comments:  editData.comments,
    timeSelected:  editData.timeSelected,
    date:  editData.startDate,
  });
}