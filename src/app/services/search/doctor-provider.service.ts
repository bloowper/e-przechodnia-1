import {Injectable} from '@angular/core';
import {AddressType, DoctorEntity} from "../../entities/DoctorEntity";
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class DoctorProviderService {

    //try to not use by not using getters setters
    public fetchedDoctors: DoctorEntity[]

    constructor() {
        this.fetchedDoctors = [
            {
                id: 1,
                firstName: 'Elżbieta',
                lastName: 'Kowalska',
                thumbnailImageUrl: 'https://media.istockphoto.com/photos/mental-health-professional-discusses-something-with-patient-picture-id912208968?k=20&m=912208968&s=612x612&w=0&h=ffJL3SJBYEfWtGSXE2tLNF_V8iHphmeAdL2-Fu0Hgw4=',
                briefDescription: 'Pomogę Ci poukładać wszystkie myśli w głowie',
                description: 'Kończąc Liceum wiedziałam, że to co chcę robić w życiu będzie polegało na pomocy innym. Wybrałam najlepszą, możliwą ścieżkę skupiając się na psychoterapii. Ukończyłam studia psychologiczne oraz przeszłam szereg kursów. Pomogłam wielu osobom, mam w swojej historii przeróżne przypadki kliniczne. ',
                addresses: [
                    {id:1, type: AddressType.EVISIT,moreInformation:'Komunikacja poprzez: Skype, Zoom, Telefon. Dokładne instrukcje zostaną przesłane przed wizytą. W przypadku chęci umówienia dokładnej drogi kontaktu proszę o sms pod numerem: 123 123 123', address: 'e wizyta'},
                    {id:2, type: AddressType.NORMAL,moreInformation:'Parter pokój 360 w srody i piatki. Dostepny parking przed budynkiem.', address: 'Lublin, ul. Zamkowa 32'},
                    {id:3, type: AddressType.NORMAL,moreInformation:'1. piętro, pokój 12 we wtorki i czwartki. Dostepny parking przed budynkiem', address: 'Lublin, ul. Kolorowa 2'},
                ],
                services: [
                    {id:1, name: "Pierwsza wizyta", price: 200},
                    {id:2, name: "Kolejna wizyta", price: 125},
                    {id:3, name: "Terapia kryzysowa", price: 125},
                    {id:4, name: "Terapia rodzin", price: 150}
                ],
                specialties: [
                    'Psychoterapia',
                    'Psychologia kliniczna',
                    'Psychotraumatologia',
                    'Psychologia kryzysu',
                    'Psychologia kobiet',
                    `Psychologia młodzieży`
                ],
                education:[
                    'Studia podyplomowe: Psychologia sądowa',
                    'Doktorantka / Akademia Leona Koźmińskiego w Warszawie',
                    'Ukończona 4 letnia Profesjonalna Szkoła Psychoterapii / Instytut Psychologii Zdrowia Polskiego Towarzystwa Psychologicznego',
                    'Program Pomocy Psychologicznej w Instytucie Integralnej Psychoterapii Gestalt',
                    'Kurs doszkalający: Terapia schematów (w tym praca z zaburzeniami osobowości typu borderline i narcystycznej)',
                    'Kurs doszkalając: Podstawy seksuologii (w tym zaburzenia seksualne i przestępstwa przeciwko wolności seksualnej i obyczajowości',
                    'Kurs doszkalający: Stres i depresja w życiu prywatnym (w tym zagadnienia wypalenia zawodowego, technik radzenia sobie ze stresem i kryzysami życiowymi)',
                    'Socjologia na Wydziale Nauk Stosowanych APS w Warszawie - magister',
                    'Pedagogika i Praca Socjalna na Wydziale Pedagogicznym Akademii Pedagogiki Specjalnej w Warszawie - licencjat',
                    'Studia magisterskie z psychologii o specjalizacji: Psychologia kliniczna osobowości.'
                ],
                treatedDiseases:[
                    'Nerwica Lękowa',
                    'Borderline',
                    'Choroba afektywna dwubiegunowa',
                    'Schizofrenia',
                    `Zaburzenia koncentracji`,
                    `Zaburzenia emocjonalne`,
                    'Nerwica'
                ],
                patientAssessments:[
                    {
                        id:1,
                        patientNick:'Roman',
                        rating: 4,
                        content: `Pani Ewa zdecydowanie pomogła mi uporać się w kryzysie.`
                    },
                    {
                        id:2,
                        patientNick:'Ela',
                        rating: 5,
                        content: 'Nigdy nie czułam się bardziej wysłuchana. Dzięki Pani Ewie moje życie znów nabrało barw. Pani Ewa wie, jakie kwestie i w jaki sposób poruszyć, aby móc je przepracować. Polecam Panią Ewę.'
                    },
                    {
                        id:3,
                        patientNick:'ER',
                        rating: 4,
                        content: 'Psychoterapeuta jak każdy inny. Pomógł mi w kryzysie i jestem wdzięczny. Jednak cierpliwości do dzieci to Pani Ewa nie ma...'
                    },
                    {
                        id:4,
                        patientNick:'Klaudia',
                        rating: 5,
                        content: 'Jestem zadowolona z usług Pani Ewy'
                    },
                    {
                        id:5,
                        patientNick:'NN',
                        rating: 3,
                        content: 'Moje dziecko zaczęło się buntować, liczyliśmy że Pani Ewa pomoże nam znaleźć wspólną nić porozumienia, lecz po wielu sesjach jedynie co się poprawiło to budżet Pani Ewy. Nie mogę powiedzieć, że się nie starała, ale jednak do upartych nastolatków to Pani Ewa nie umie dotrzeć.'
                    }
                ]

            }
        ]
    }

    getDoctor(doctorId: number): Observable<DoctorEntity> {
        //mock fetch moethod, acth like request
        return new Observable(subscriber => {
            var doctorEntity = this.fetchedDoctors.find(value => value.id === doctorId);
            setTimeout(() => {
                if (doctorEntity != null) {
                    subscriber.next(doctorEntity);
                    subscriber.complete();
                } else {
                    subscriber.error(new Error(`Nie znaleziono lekarza o podanym id = ${doctorId}`))
                    subscriber.complete();
                }
            }, 500);
        })
    }

    isNormalVisit(addressType:AddressType):boolean {
        if (addressType === AddressType.NORMAL) {
            return true;
        } else {
            return false;
        }
    }

    getDoctorsById(doctorsId:Set<number>):Observable<DoctorEntity[]>{
        return new Observable(subscriber => {
            let doctors: DoctorEntity[] = [];
            for (let fetchedDoctor of this.fetchedDoctors) {
                if (doctorsId.has(fetchedDoctor.id)) {
                    doctors.push(fetchedDoctor);
                }
            }
            setTimeout(() => {
                subscriber.next(doctors);
                subscriber.complete();
            }, 500);
        });
    }











}
