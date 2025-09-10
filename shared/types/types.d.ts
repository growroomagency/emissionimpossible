declare type CardChoise = 'A' | 'B';

declare type Company = {
    name: string;
    logo: { src: string; type: 'png' | 'svg'; };
    ecoscore: number;
    emissions: number;
    web: string;
}

declare type Question = {
    companyA: Company;
    companyB: Company;
    isCorrectChoise: CardChoise;
}

declare type ResultedState = {
    email: string;
    username: string;
    score: number;
    url?: string;
}