import {Injectable} from '@angular/core';
import {AddressType, DoctorEntity} from "../../entities/DoctorEntity";
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class DoctorProviderService {

    fetchedDoctors: DoctorEntity[]

    constructor() {
        this.fetchedDoctors = [
            {
                id: 1,
                firstName: 'Elżbieta',
                lastName: 'Kowalska',
                thumbnailImageUrl: 'https://i.pinimg.com/564x/e3/69/d7/e369d7e313c8dc041f24958d5d36ff67.jpg',
                briefDescription: 'error qui hic libero assumenda id soluta autem esse dicta quia doloremque veritatis nemo illum accusamus in doloremque vel odio',
                description: 'omnis et aut quis omnis minima nulla ut beatae esse sapiente natus minus est labore provident qui hic reiciendis impedit culpa est omnis ut non consequatur consequuntur dicta nesciunt maxime quam nesciunt debitis qui corporis libero quia nobis quo beatae aspernatur eveniet qui nostrum est eos quia nobis vero non est sit dolores natus sunt magni dolor consequuntur consequatur harum reiciendis et voluptates voluptate optio aut esse eveniet sapiente facere ipsam nam nihil reiciendis incidunt dolores ut numquam facere et dignissimos iusto distinctio veniam qui velit consequatur quisquam ratione veritatis est necessitatibus animi magni doloremque dolores facere molestiae a odio architecto et nam sed eum ipsa repudiandae id quam velit neque pariatur repudiandae sed officia veritatis et rem ut laborum minima impedit sint vero ut animi sed nemo dignissimos quod autem adipisci laboriosam necessitatibus accusamus fugit unde corporis error error aut et placeat rerum molestiae enim illo ut sapiente et magni reprehenderit sed molestiae vitae nobis nihil omnis aperiam sit ut velit natus unde velit saepe ab ut ipsa voluptatibus unde vel necessitatibus mollitia nemo et perspiciatis perspiciatis qui et ex officiis numquam qui et doloremque aut voluptas molestiae tempore ut maiores eaque magnam et facilis doloremque doloremque est aut veritatis sint non quasi esse dolor qui ea voluptas aperiam qui architecto aut voluptatum mollitia aut quia adipisci architecto aut doloremque quis autem eum quo numquam tenetur deleniti facere iusto et id hic enim consequuntur non dolores ad necessitatibus inventore iste qui occaecati nihil culpa ex cupiditate enim cupiditate in velit ut necessitatibus magnam rerum incidunt est dolor velit nostrum pariatur quidem quia fugit qui labore maiores omnis soluta quia velit vel et et ut non ipsam et repellat aliquid accusamus qui ullam ad veritatis earum commodi aut deleniti laborum accusamus est impedit harum corporis eaque provident et omnis sit',
                addresses: [
                    {type: AddressType.EVISIT,moreInformation:'Komunikacja poprzez: skype,zoom,telefon.Dokładne instrukcje zostaną przesłane przed wizytą. W przypadku chęci umówienia dokładnej drogi kontaktu prosze o sms 123 123 123', address: 'e wizyta'},
                    {type: AddressType.NORMAL,moreInformation:'Parter pokój 360 w srody i piatki. Dostepny parking przed budynkiem.', address: 'Lublin Zamkowa 32'},
                    {type: AddressType.NORMAL,moreInformation:'Parter pokój 360 w srody i piatki. Dostepny parking przed budynkiem', address: 'Lublin Zamkowa 32'},
                ],
                services: [
                    {name: "qui excepturi ", price: 125},
                    {name: "eaque officiis", price: 125},
                    {name: "tenetur nulla", price: 125},
                    {name: "sint illum", price: 125}
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
                        patientNick:'Roman',
                        rating: 4,
                        content: `id quibusdam et est aut eaque impedit accusamus reprehenderit excepturi reprehenderit consequuntur sed sed enim placeat et rerum quam voluptatibus`
                    },
                    {
                        patientNick:'Eaque',
                        rating: 3,
                        content: 'doloribus modi officia nostrum rem odit ullam aut est et labore dolores voluptas architecto vero et reiciendis dolor rerum dolorem voluptatum aliquid et ex pariatur omnis consequuntur cumque voluptatum eaque deleniti ipsam illum dignissimos eum quia sint ut fugiat optiot'
                    },
                    {
                        patientNick:'Eaque',
                        rating: 3,
                        content: 'doloribus modi officia nostrum rem odit ullam aut est et labore dolores voluptas architecto vero et reiciendis dolor rerum dolorem voluptatum aliquid et ex pariatur omnis consequuntur cumque voluptatum eaque deleniti ipsam illum dignissimos eum quia sint ut fugiat optiot'
                    },
                    {
                        patientNick:'Eaque',
                        rating: 3,
                        content: 'doloribus modi officia nostrum rem odit ullam aut est et labore dolores voluptas architecto vero et reiciendis dolor rerum dolorem voluptatum aliquid et ex pariatur omnis consequuntur cumque voluptatum eaque deleniti ipsam illum dignissimos eum quia sint ut fugiat optiot'
                    },
                    {
                        patientNick:'Eaque',
                        rating: 3,
                        content: 'doloribus modi officia nostrum rem odit ullam aut est et labore dolores voluptas architecto vero et reiciendis dolor rerum dolorem voluptatum aliquid et ex pariatur omnis consequuntur cumque voluptatum eaque deleniti ipsam illum dignissimos eum quia sint ut fugiat optiot'
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
                } else {
                    subscriber.error(new Error(`Nie znaleziono lekarza o podanym id = ${doctorId}`))
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

}
