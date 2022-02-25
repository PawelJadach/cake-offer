import {
	AIRTABLE_API_KEY,
	AIRTABLE_API_URL,
	AIRTABLE_BASE_ID,
} from '../constants/constants';

export const generateUrlToAirtable = (airtableTableName: string) => {
	return `${AIRTABLE_API_URL}/${AIRTABLE_BASE_ID}/${airtableTableName}?api_key=${AIRTABLE_API_KEY}`;
};
