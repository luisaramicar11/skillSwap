export interface Report {
    message: string;
    details: Details;
    data:    IReports;
}

export interface IReports {
    report: IReport[];
}

export interface IReport {
    id:            number;
    titleReport?:   string;
    description?:   string;
    dateReport?:   Date;
    actionTaken?:   string;
    idState?:       number;
    idUser?:        number;
    idReportedUser?: number;
}

export interface IReportGet {
    id:            number;
    titleReport?:   string;
    description?:   string;
    dateReport?:   Date;
    actionTaken?:   string;
    state?:        string;
    user?:        string;
    reportedUser?: string;
}

export interface Details {
    text: string;
}

export interface TableDataReports {
    data : IReport[],
    setDataToEdit: (report: IReport) => void;
    deleteData: (reportId: number) => void;
}