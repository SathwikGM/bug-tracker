// Defining type script interface
export interface IDefect{
  _id: string,
  defectId: string;
  title: string;
  description: string;
  owners: string[];
  status: string;
  priority: string;
  environment: string;
  createdBy: string;
  createdDate: string;
}