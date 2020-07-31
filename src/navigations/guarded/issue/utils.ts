import {range} from 'ramda';
import uuidv4 from '@intelocate/utils';
import {
  CreateSimpleTaskTreeRequest,
  SimpleTaskTree,
} from '@intelocate/api-services';
export interface State {
  step: Step;
  organiations: Organization[];
  selectedOrganizationId: string | null;
  locations: Location[];
  subLocations: Location[];
  selectedLocationId: string | null;
  selectedSubLocationId: string | null;
  categories: Category[];
  subCategories: Category[];
  issues: Category[];
  selectedCategoryId: number | null;
  selectedSubCategoryId: number | null;
  selectedIssueId: number | null;
  description: string;
  files: File[];
  submittedBy: IssueCreator | null;
  submittedIssue: SubmittedIssue | null;
  progressStarted: number | null;
  hasConnection: boolean;
  badConnection: boolean | null;
  locationCheckIn?: true;
  externalTagId?: string;
  latitude?: number;
  longitude?: number;
}

export type Step =
  | 'location'
  | 'category'
  | 'details'
  | 'progress'
  | 'success'
  | 'no-locations';

export interface IssueCreator {
  id: string;
  name: string;
}

export interface SubmittedIssue {
  id: string;
  issueNumber: string;
}

export interface Organization {
  id: string;
  name: string;
}

export interface Location {
  id: string;
  name: string;
}

export interface Category {
  id: number;
  name: string;
  iconCode: number | null;
  levels?: number;
}

export function getTaskParams(state) {
  // categoryId: selectedCategoryId,
  // locationId: props.nfcLocationId || selectedLocationId,
  // externalCreatorId: externalCreatorID,
  // name: selectedCategoryIssue || selectedCategoryName,
  // status: 'NEW',
  // forms: formData,

  const project = {
    name: state.name,

    externalCreatorId: state.externalCreatorId,
    categoryId: state.categoryId,

    status: 'NEW',

    files: getFileLinks(1, state.files),

    locationId: state.locationId,
    forms: state.formData,
  };

  return {
    parentId: null,
    'tasks[]': [project],
    'files[]': [state.files],
  };
}
export function getFileLinks(startIndex: number, files: File[]) {
  if (files.length) {
    const end = startIndex + files.length;
    return range(startIndex, end);
  } else {
    return null;
  }
}
