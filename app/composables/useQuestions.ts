export default function () {
    const { growRoom } = useAppConfig()

    const shell: Company = { 
        name: 'Shell', logo: { src: 'shell-2020', type: 'png' }, emissions: 0.16, ecoscore: 75, web: 'https://www.shell.co.uk' 
    };
    const patagonia: Company = { 
        name: 'Patagonia', logo: { src: 'Patagonia_(Unternehmen)_logo', type: 'png' }, emissions: 1.54, ecoscore: 44, web: 'https://eu.patagonia.com/gb/en/home' 
    };
    const cocaCola: Company = { 
        name: 'Coca-Cola', logo: { src: 'coca-cola-logo', type: 'png' }, emissions: 1.16, ecoscore: 49, web: 'https://www.coca-cola.com/gb/en' 
    };
    const tonysChoco: Company = { 
        name: 'Tony\'s Chocolonely', logo: { src: 'Tony_s_Chocolonely_Logo_NL', type: 'png' }, emissions: 1.38, ecoscore: 65, web: 'https://uk.tonyschocolonely.com' 
    };
    const fussy: Company = { 
        name: 'Fussy', logo: { src: 'Fussy_Black_Logo', type: 'png' }, emissions: 1.89, ecoscore: 61, web: 'https://www.getfussy.com' 
    };
    const schneiderElectric: Company = { 
        name: 'Schneider Electric', logo: { src: 'Schneider_Electric_2008', type: 'png' }, emissions: 2.62, ecoscore: 35, web: 'https://www.se.com/ww/en' 
    };
    const bp: Company = { 
        name: 'BP', logo: { src: 'BP_Helios_logo', type: 'png' }, emissions: 0.38, ecoscore: 67, web: 'https://www.bp.com' 
    };
    const bLab: Company = { 
        name: 'B-Lab', logo: { src: 'B_Lab_logo', type: 'svg' }, emissions: 0.9, ecoscore: 68, web: 'https://bcorporation.uk' 
    };
    const uncc: Company = { 
        name: 'UN Climate Change', logo: { src: 'United_Nations_Climate_Change_Conference_logo', type: 'svg' }, emissions: 4.69, ecoscore: 31, web: 'https://unfccc.int' 
    };

    const toQuestion = (a: Company, b: Company): Question => ({
        companyA: a,
        companyB: b,
        isCorrectChoise: a.ecoscore >= b.ecoscore ? 'A' : 'B'
    })

    const questions: Question[] = [
        toQuestion(shell, patagonia),
        toQuestion(cocaCola, tonysChoco),
        toQuestion(growRoom, fussy),
        toQuestion(schneiderElectric, bLab),
        toQuestion(uncc, bp),
    ];

    return questions;
}