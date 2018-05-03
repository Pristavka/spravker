import { database } from '../../firebase/firebaseInitialize';
import { FETCH_ORGS, SHOW_DIALOG_WINDOW } from '../constants';

// --------- Action to firebase ---------
const fetchAndSubscribeInitialDataFromFirestore = () => dispatch =>
  database.collection('organizations').onSnapshot(querySnapshot => {
    const organizations = [];

    querySnapshot.forEach(doc => {
      const org = { id: doc.id, ...doc.data() };
      return organizations.push(org);
    });

    dispatch(fetchOrgs(organizations));
  });

const addNewOrganizationToFirestore = org => dispatch =>
  database
    .collection('organizations')
    .doc(`${org.url}`)
    .set(org)
    .then(dispatch(show_added_successfully()));


// --------- Basics actions ---------
const fetchOrgs = orgs => ({ type: FETCH_ORGS, payload: orgs });
const show_added_successfully = () => ({
  type: SHOW_DIALOG_WINDOW,
  payload: {
    status: true,
    type_of_information: 'The organization has been added successfully'
  }
});

export {
  fetchAndSubscribeInitialDataFromFirestore,
  addNewOrganizationToFirestore
};
