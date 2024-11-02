document.addEventListener('DOMContentLoaded', function() {
    
    if (document.getElementById('map')) {
        var map = L.map('map').setView([52.430869, 30.993657], 12);

        L.tileLayer('https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
            maxZoom: 20,
            subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
        }).addTo(map);
    }


var murals = [
    {
        coords: [52.418282, 30.976864],
        image: 'images/barikinmural.jpg',
        panorama: 'https://i.imgur.com/sEkpry4.jpeg',
        info: 'Изображение Емельяна Барыкина на ул.Барыкина, 94',
        biography: {
            name: 'В преддверии 75-й годовщины победы в Великой Отечественной на доме № 94 по улице Барыкина был создан мурал с изображением Емельяна Игнатьевича.',
            bio: 'Барыкин Емельян Игнатьевич (1902 г., д. Тросна Жуковского района Брянской области – 1951 г.), один из организаторов и руководителей подполья и партизанского движения на территории Гомельской области во время Великой Отечественной войны, Герой Советского Союза (1944 г.). Участвовал в создании Гомельского полка народного ополчения (июль 1941 г.), и партизанского отряда «Большевик» (август 1941 г.). Похоронен в г.Гомеле на площади Труда у Вечного огня.',
            photo: 'images/barikinP.jpg'
        }
    },
    {
        coords: [52.381325, 31.030297],
        image: 'images/rokosovskimural.jpg',
        panorama: 'https://i.imgur.com/mynStMG.jpeg',
        info: 'Изображение Константина Рокоссовского на ул.Ильича, 106',
        biography: {
            name: 'В Гомеле появился 30-метровый мурал Константина Рокоссовского – легендарного полководца, дважды героя Советского Союза.',
            bio: 'Рокоссовский Константин Константинович [09(21).12.1896 – 03.08.1968], маршал Советского Союза (1944), маршал Польши (1949). Дважды Герой Советского Союза. Участник Первой мировой войны.',
            photo: 'images/rokosovskiP.jpg'
        }
    },
    {
        coords: [52.469995, 30.985251],
        image: 'images/zebnickymural.jpg',
        panorama: 'https://i.imgur.com/FrH3gTr.jpeg',
        info: 'Изображение Николая Зебницкого на ул.Советской, 145',
        biography: {
            name: 'В преддверии 80-летия освобождения Гомеля от немецко-фашистских захватчиков, председатель Гомельского горисполкома Владимира Привалова принял участие в открытии муралов в честь Героя Советского Союза Николая Васильевича Зебницкого',
            bio: 'Во время начала ВОВ, Зебницкий уже был командиром взвода отряда особого назначения НКВД Западного фронта. В апреле 1942 года Николай Васильевич был назначен комиссаром второго партизанского отряда имени Дзержинского. Под его руководством отряд действовал на вражеской территории до ноября 1943 года, в том числе и на Гомельщине. После освобождения Гомеля Николай Зебницкий год служил в Управлении Наркомата государственной безопасности СССР по Гомельской области, позже – заместителем начальника отделения УМГБ в Рогачеве. Пять лет, с 1950 года, – в Управлении НГБ СССР по Ростовской области. А когда в 1955 году в звании майора госбезопасности был уволен в запас, вернулся в Гомель. Скончался Николай Васильевич Зебницкий 29 ноября 1975 года. Похоронен на кладбище в Осовцах. Зебницкий был удостоен звания Героя Советского Союза. Также награжден двумя орденами Ленина, орденом Красного Знамени, Красной Звезды, медалями.',
            photo: 'images/zebnicky.jpg'
        }
    },
    {
        coords: [52.473758, 30.978207],
        image: 'images/fedunskiy.jpg',
        panorama: 'https://i.imgur.com/yFxutm4.jpeg',
        info: 'Изображение Ивана Федюнинского на ул.Советской, 157/2',
        biography: {
            name: 'В преддверии 80 летия освобождения Гомеля от немецко-фашистских захватчиков в городе появился новый мурал в честь генерала армии Героя Советского Союза почетного гражданина Гомеля Ивана Ивановича Федюнинского',
            bio: 'Иван Иванович Федюнинский, выдающийся советский военачальник, внес значительный вклад в освобождение Беларуси. Во время Великой Отечественной войны он командовал 11-й армией, участвуя в ожесточенных боях Брянской и Гомельско-Речицкой операций. Именно под его руководством советские войска приблизились к освобождению Гомеля, сыграв ключевую роль в разгроме немецко-фашистских захватчиков на этом направлении. Впоследствии, командуя 2-й ударной армией, Федюнинский активно участвовал в освобождении Ленинграда и других стратегически важных территорий. За свои выдающиеся заслуги и мужество, проявленные в годы войны, он был удостоен звания Героя Советского Союза и награжден многими орденами и медалями. Имя Ивана Ивановича Федюнинского навсегда вписано в историю Великой Отечественной войны как символ мужества и героизма советского солдата.',
            photo: 'images/Fedyuninskiy.jpg'
        }
    },
    {
        coords: [52.447931, 31.022020],
        image: 'images/muralMazyrov.jpg',
        panorama: 'https://i.imgur.com/iIQ7OT8.jpeg',
        info: 'Изображение Кирилла Мазурова на ул.Мазурова, 4к/2',
        biography: {
            name: 'Ко 800 летию города торцы двух домов на улице Мазурова украсило очередное граффити с изображением знаковой для Гомеля личности. Мурал посвящен советскому партийному деятелю Кириллу Мазурову.',
            bio: 'Кирилл Трофимович Мазуров, уроженец Гомельской области, стал легендарной фигурой белорусского сопротивления во время Великой Отечественной войны. Активно участвуя в партизанском движении, он организовывал диверсии и партизанские отряды на оккупированной территории Беларуси. Особо отличился в Гомельской области, где под его руководством были проведены многочисленные успешные операции против немецко-фашистских захватчиков. После войны Мазуров занимал высшие государственные посты в БССР, восстанавливая и развивая республику. За свои выдающиеся заслуги перед Родиной он был удостоен звания Героя Социалистического Труда и награжден многими орденами и медалями, среди которых Орден Ленина (пять раз), Орден Красного Знамени, два ордена Отечественной войны I степени и Орден Дружбы народов.',
            photo: 'images/mazyrov.jpg'
        }
    },
    {
        coords: [52.451044, 30.996717],
        image: 'images/kozhyrmurall.jpg',
        panorama: 'https://i.imgur.com/WxvacEU.jpeg',
        info: 'Изображение Илья Кожара на ул.Кожара, 2',
        biography: {
            name: 'В августе исполняется 120 лет со дня рождения Ильи Кожара, а в марте 105 лет отметила газета гомельская прауда. Поэтому закономерно, что именно по инициативе редакции областной газеты, которая также выступила меценатом проекта, фасад дома по улице, названной в честь Героя, украсил мурал нашему известному земляку.',
            bio: 'Илья Павлович Кожар, уроженец Витебской области, стал легендарной фигурой партизанского движения в Белоруссии. До войны он работал редактором "Гомельской правды", где активно участвовал в общественно-политической жизни региона. С началом Великой Отечественной войны возглавил Гомельское подполье и партизанское соединение, сыграв решающую роль в борьбе с немецкими оккупантами. За мужество и героизм, проявленные в годы войны, Илья Павлович был удостоен звания Героя Советского Союза. После войны он продолжил служить Родине, занимая высокие партийные должности и активно участвуя в восстановлении разрушенной войной Белоруссии. Кожар был награжден множеством орденов и медалей, в том числе орденом Ленина и медалью "Золотая Звезда". Его имя навсегда вписано в историю Гомеля и всей республики как символ мужества и непоколебимости духа.',
            photo: 'images/kozhyr.jpg'
        }
    },
     {
        coords: [52.459411, 31.033290],
        image: 'images/borodinmural.jpg',
        panorama: 'https://i.imgur.com/p4mUrLH.jpeg',
        info: 'Изображение Тимофея Бородина на ул.Т.С.Бородина, 10А',
        biography: {
            name: 'Новый мурал появился на одном из домов в Гомеле. Посвящён он Герою Советского Союза Тимофею Бородину. Граффити с изображением известного гомельского подпольщика находится на новостройке, выросшей на одноимённой улице в микрорайоне «Мельников Луг».',
            bio: 'Тимофей Степанович Бородин, уроженец Гомеля, стал одним из ключевых организаторов и руководителей Гомельского коммунистического подполья в годы Великой Отечественной войны. Окончив Московский полиграфический институт, он работал инженером на гомельской фабрике "Полеспечать". С началом войны Бородин активно включился в подпольную борьбу, создав и возглавив оперативный центр по координации деятельности подпольных групп. Под его руководством осуществлялись диверсии, сбор разведывательных данных и оказание помощи партизанам. Несмотря на риски, Бородин и его соратники наносили ощутимый урон врагу. За мужество и героизм, проявленные в борьбе с немецко-фашистскими захватчиками, Тимофей Степанович Бородин был посмертно удостоен высокого звания Героя Советского Союза. Его имя навсегда вписано в историю Гомеля как символ стойкости и самоотверженности в борьбе за свободу Родины.',
            photo: 'images/borodin.jpg'
        }
    },
     {
        coords: [52.385164, 31.023002],
        image: 'images/golovochevmural.jpg',
        panorama: 'https://i.imgur.com/hdCosno.jpeg',
        info: 'Изображение Павла Головочева на ул.Головочева, 2',
        biography: {
            name: 'Ко дню военно-воздушные сил на фаседе одного из зданий открыли новый мурал великому летчику Советского Союза Павлу Головочеву.',
            bio: 'Павел Яковлевич Головачёв, уроженец Гомельской области, стал одним из самых прославленных летчиков-асов Великой Отечественной войны. С первых дней войны он сражался на различных фронтах, проявив исключительное мужество и мастерство. За годы войны он совершил сотни боевых вылетов, сбив десятки вражеских самолетов. Особо отличился Головачёв в небе над Сталинградом, где его эскадрилья нанесла значительный урон вражеской авиации. За свои подвиги он был дважды удостоен высшей награды СССР – звания Героя Советского Союза. После войны Головачёв продолжил службу в армии, занимался общественной деятельностью. Его имя навсегда вписано в историю Беларуси как символ мужества и героизма.',
            photo: 'images/golovochev.png'
        }
    },
     {
        coords: [52.446591, 30.968753],
        image: 'images/carikovmural.jpg',
        panorama: 'https://i.imgur.com/e2uRBYw.jpeg',
        info: 'Изображение Бориса Царикова на ул.Царикова, 3',
        biography: {
            name: 'Ко дню независимости в Гомеле появится новый мурал пионеру-герою Борису Царикову.',
            bio: 'Борис Андреевич Цариков, уроженец Гомеля, прославился своим подвигом во время Великой Отечественной войны. Будучи совсем юным, он добровольцем ушел на фронт и стал разведчиком. Одним из самых ярких эпизодов его короткой, но героической жизни была переправа через Днепр в районе Лоева. В октябре 1943 года, будучи еще подростком, Борис с группой разведчиков первым форсировал реку, водрузив на правом берегу Красное знамя. Несколько дней он участвовал в боях за расширение плацдарма, неоднократно возвращаясь на левый берег с важными донесениями. За этот подвиг Борис Цариков был посмертно удостоен звания Героя Советского Союза. Его имя стало символом мужества и героизма для молодежи Беларуси.',
            photo: 'images/Carikov.jpg'
        }
    },
     {
        coords: [52.439947, 30.994051],
        image: 'images/dokutovich.jpg',
        panorama: 'https://i.imgur.com/dOgWCo0.jpeg',
        info: 'Изображение Галина Докутович на ул.Красной, 1',
        biography: {
            name: 'Ко дню независимости в Гомеле появится новый мурал легендарной летчице Галине Докутович.',
            bio: 'Галина Ивановна Докутович – советская летчица, штурман 46-го гвардейского ночного легкобомбардировочного авиационного полка, прославившаяся своими подвигами в годы Великой Отечественной войны. Родом из Гомеля, она с юности мечтала о небе. С началом войны добровольцем ушла на фронт. Летая на биплане У-2, экипажи "ночных ведьм", к которым принадлежала Галина, наносили точечные удары по вражеским войскам. Несмотря на свою молодость и хрупкость, Докутович проявила мужество и отвагу, совершив множество боевых вылетов. К сожалению, ее жизнь трагически оборвалась в 1943 году во время одного из вылетов. За свои боевые заслуги она была награждена орденом Красной Звезды. Имя Галины Докутович стало символом героизма советских женщин в годы Великой Отечественной войны. Ее подвиг увековечен в названиях улиц, школьных пионерских дружин в Гомеле, а также в произведениях литературы и искусства.',
            photo: 'images/dokutovichk.jpg'
        }
    },
     {
        coords: [52.356324, 30.979684],
        image: 'images/zaicev.mural.jpg',
        panorama: 'https://i.imgur.com/E7c9ot2.jpeg',
        info: 'Изображение Ивана Зайцева на ул.Октябрьская, 7, г. Ченки',
        biography: {
            name: 'В поселке под Гомелем появился мурал в честь Героя Советского Союза Ивана Зайцева',
            bio: 'Родился Иван Зайцев как раз в этом поселке под Гомелем, в доме на той улице, которая сейчас уже носит его имя. На ярком зеленом домике можно увидеть мемориальную табличку с именем Героя. В Красную армию Иван попал в 17 лет, сразу после того, как освободили Гомель. Командир отделения 9-й роты 1050-го стрелкового полка сержант Зайцев 16 апреля 1945 года в бою за станцию Вербиг, будучи уже тяжело раненным, закрыл своим телом амбразуру вражеского ДОТа, огонь которого сдерживал наступление советских бойцов. Звание Героя Советского Союза Зайцеву присвоено посмертно. До взятия Берлина оставалось всего несколько дней. Его именем названы улицы в Гомеле и поселке Ченки. Изображение юного Героя появилось на стене многоэтажки в новом микрорайоне. Выбирали место так, чтобы портрет был виден с нескольких ракурсов. Теперь появилась еще одна инициатива – назвать именем Ивана Зайцева местную школу.',
            photo: 'images/zaicevreal.jpg'
        }
    },
];

var modal = document.getElementById("muralModal");
var modalTitle = document.getElementById("modal-title");
var modalImage = document.getElementById("modal-image");
var modalDescription = document.getElementById("modal-description");
var modalBio = document.getElementById("modal-bio");
var closeModal = document.getElementsByClassName("close")[0];
var panoramaContainer = document.getElementById("panorama-container");
var panoramaElement = document.getElementById("panorama");


window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

var audio = new Audio('images/musicfon.mp3');
audio.loop = true;

document.addEventListener('click', function () {
    audio.play().catch(function(error) {
        console.log("Не удалось воспроизвести аудио: " + error);
    });
}, { once: true });

var toggleMusicBtn = document.getElementById('toggle-music-btn');
var isPlaying = true;

toggleMusicBtn.addEventListener('click', function() {
    if (isPlaying) {
        audio.pause();
        toggleMusicBtn.innerHTML = "&#128263;";
        toggleMusicBtn.classList.add('muted');
    } else {
        audio.play();
        toggleMusicBtn.innerHTML = "&#128266;";
        toggleMusicBtn.classList.remove('muted');
    }
    isPlaying = !isPlaying;
});

function launchConfetti() {
    const colors = ['#ff0000', '#00ff00', '#0000ff'];
    const canvas = document.createElement('canvas');
    document.body.appendChild(canvas);
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    for (let i = 0; i < 100; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
        ctx.fillRect(x, y, 10, 10);
    }

    setTimeout(() => {
        document.body.removeChild(canvas);
    }, 2000);
}

var routeControl;
    // Настройка иконки с анимацией для текущего местоположения
    var userLocationIcon = L.divIcon({
        html: '<img src="images/location.png" class="rotating-marker" alt="Ваше местоположение">',
        className: '', // Убираем стандартные стили
        iconSize: [20, 20], // Размер иконки
        iconAnchor: [24, 24] // Центр иконки
    });
    // Функция для определения местоположения пользователя
    // Функция для определения местоположения пользователя
    function locateUser() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                var userLocation = [position.coords.latitude, position.coords.longitude];
                
                // Добавляем маркер пользователя с крутящейся иконкой
                var userMarker = L.marker(userLocation, { icon: userLocationIcon }).addTo(map)
                    .bindPopup("Вы здесь").openPopup();

                map.setView(userLocation, 13);
            }, function(error) {
                console.log("Ошибка определения местоположения: " + error.message);
            });
        } else {
            alert("Геолокация не поддерживается этим браузером.");
        }
    }

    locateUser();
       // Функция для отображения вариантов маршрута
    function displayRouteOptions(routes) {
        routeOptionsContainer.innerHTML = '';
        routes.forEach(function(route, index) {
            var option = document.createElement('div');
            option.classList.add('route-option');
            option.innerHTML = `
                <p><strong>Вариант ${index + 1}</strong></p>
                <p>Расстояние: ${(route.summary.totalDistance / 1000).toFixed(2)} км</p>
                <p>Время: ${(route.summary.totalTime / 60).toFixed(1)} мин</p>
            `;
            option.addEventListener('click', function() {
                routeControl.setWaypoints(route.inputWaypoints);
            });
            routeOptionsContainer.appendChild(option);
        });
    }

murals.forEach(function (mural) {
    var marker = L.marker(mural.coords).addTo(map);

    marker.bindTooltip(`<img src="${mural.image}" alt="Мурал" style="width: 150px; height: auto;"><br>${mural.info}`, {
        permanent: false,
        direction: 'top',
        offset: [0, -10]
    });

    marker.on('click', function () {
                if (routeControl) {
                map.removeControl(routeControl); 
            }

            navigator.geolocation.getCurrentPosition(function(position) {
                var userLocation = [position.coords.latitude, position.coords.longitude];

                // Создаем и добавляем новый маршрут с использованием Leaflet Routing Machine
                routeControl = L.Routing.control({
                    waypoints: [
                        L.latLng(userLocation),
                        L.latLng(mural.coords)
                    ],
                    routeWhileDragging: false,
                    showAlternatives: true,
                    createMarker: function() { return null; },  // Не показывать дополнительные маркеры
                    lineOptions: {
                        styles: [{ color: '#4285f4', opacity: 0.7, weight: 6 }]
                    }
                }).addTo(map);

            }, function(error) {
                console.log("Ошибка получения местоположения: " + error.message);
            });

        marker.setIcon(L.icon({
            iconUrl: 'images/markered.png',
            iconSize: [40, 40],
            iconAnchor: [20, 40]
        }));

        modalTitle.innerText = mural.biography.name;
        modalImage.src = mural.biography.photo;
        modalDescription.innerText = mural.info;
        modalBio.innerText = mural.biography.bio;

        pannellum.viewer('panorama', {
            type: 'equirectangular',
            panorama: mural.panorama, 
            autoLoad: true,
            showZoomCtrl: false
        });

        modal.style.display = "block";
        console.log('Панорама должна загрузиться:', mural.panorama);
    });
});


closeModal.onclick = function() {
    modal.style.display = "none";
};


document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.patriotic-section, .war-section, .container, .modal-content');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach(section => {
        observer.observe(section);
    });
});

window.addEventListener('scroll', function() {
    const parallaxElements = document.querySelectorAll('.parallax');
    parallaxElements.forEach(el => {
        let scrollPosition = window.scrollY;
        el.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
    });
});

  if (document.getElementById('particles-js')) {
        particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 100,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": ["#d52b1e", "#00a650", "#fff"]
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            }
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
   "retina_detect": true
        });
    }

});

document.querySelectorAll('.event-card').forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.transform = 'scale(1.05)';
    });

    card.addEventListener('mouseout', () => {
        card.style.transform = 'scale(1)';
    });
});