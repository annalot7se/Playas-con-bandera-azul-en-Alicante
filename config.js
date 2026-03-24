var config = {
    style: 'mapbox://styles/anaselo/cmn21ktan00ji01s9d0q8g7ts',
    // leave commented to use Mapbox Standard Style
    accessToken: 'pk.eyJ1IjoiYW5hc2VsbyIsImEiOiJjbW4wM2RkenkwZnRnMnJzZm5pbHRseGY0In0.6NY7ffBU_uBL8e4SnOmgng',
    showMarkers: true,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Playas de Alicante con Bandera Azul',
    subtitle: 'Storymaps de Playas de Alicante con Bandera Azul',
    byline: 'By A. Serrano-Lotina',
    footer: 'Data Source: dat.gob.es. Images source: https://www.comunitatvalenciana.com/ and www.wikipedia.com <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'first-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Saladar-Urbanova',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Playa_saladares_alicante2.JPG/330px-Playa_saladares_alicante2.JPG',
            description: 'La playa de los Saladares, del Saladar o de Urbanova es una playa situada junto a la zona residencial de Urbanova y el espacio natural protegido del saladar de Agua Amarga. Cuenta con una zona reservada para el nudismo al final del paseo marítimo, hasta el límite con el término municipal de Elche. ',
            location: {
                center: [-0.519755, 38.278492],
                zoom: 12.52,
                pitch: 60.01,
                bearing: -50.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Sant Joan',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Playa_de_San_JuanALC.jpg/330px-Playa_de_San_JuanALC.jpg',
            description: 'Esta playa es una de las más conocidas de la capital alicantina.',
            location: {
                center: [-0.409317, 38.37503],
                zoom: 8.5,
                pitch: 60,
                bearing: 43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Tabarca',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Tabarca._Ciutat_des_del_Camp_3.JPG/330px-Tabarca._Ciutat_des_del_Camp_3.JPG',
            description: 'La playa de Tabarca está situada en la isla de Tabarca. Se puede acceder en barco desde los puertos de Santa Pola, Guardamar, Torrevieja y Alicante.',
            location: {
                center: [-0.478931, 38.165829],
                zoom: 8.5,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Cap Blanc',
            image: 'https://multimedia.comunitatvalenciana.com/6F6E436AD043445E9636334265579433/img/B7B8FA4C0EFC44A4ACAF2EFD6DBD756F/Cap_Blanc_02.jpg?responsive',
            description: 'La Cala Cap Blanc en Altea está ubicada muy cerca del Club Náutico. Es una playa accesible, donde si te mueves en silla de ruedas vas a encontrar lo necesario para llegar hasta el mar, y con servicio de Cruz Roja e información sobre el estado del mar. ',
            location: {
                center: [-0.062186, 38.58146],
                zoom: 8.5,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fifth-identifier',
            alignment: 'right',
            hidden: false,
            title: 'La Roda',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Altea%2C_Spain_%2826616253950%29.jpg/330px-Altea%2C_Spain_%2826616253950%29.jpg',
            description: 'La playa de la Roda es una playa de guijarros del municipio de Altea. Tiene una longitud de 825 m, con una amplitud de 45 m.',
            location: {
                center: [-0.053208, 38.5932],
                zoom: 8.5,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'sixth-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Cala Fustera',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Cala_o_platja_de_la_Fustera%2C_Benissa.JPG/330px-Cala_o_platja_de_la_Fustera%2C_Benissa.JPG',
            description: 'La cala de la Fustera es una playa de arena del municipio de Benisa. Se sitúa en un entorno aislado. Dispone de acceso para discapacitados. Es una playa balizada.',
            location: {
                center: [0.088062, 38.6646],
                zoom: 8.5,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'seventh-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Cala del Moraig',
            image: 'https://multimedia.comunitatvalenciana.com/A6F400F358ED41BEA060410710AB63E8/img/123D72B3F60C4D208B449C08457E1285/Benitatxell_calaMoraig_2.jpg?responsive',
            description: 'Esta es la cala principal de Benitatxell y está enclavada en un paraje excepcional, rodeado de acantilados y vegetación. Escondida detrás del macizo del Puig Llorença, el acceso a la Cala del Moraig no puede realizarse con vehículo. Hay una zona de aparcamiento junto al inicio de la carretera de bajada a la cala; el último tramo hasta llegar se tiene que hacer a pie. Tiene acceso para discapacitados y sillas anfibias para que se puedan bañar; socorristas, salvamento, servicio de enfermería y limpieza diaria para que la playa esté en las mejores condiciones.',
            location: {
                center: [0.166687, 38.7101],
                zoom: 8.5,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'eighth-identifier',
            alignment: 'right',
            hidden: false,
            title: 'L’Arenal-Bol',
            image: 'https://multimedia.comunitatvalenciana.com/34CC7E1D6DB54C62A758464ABCC7DADC/img/ED7B540D434F4D579FCC4973B412143E/Playa_Arenal_Bol_MG_7016.jpg?responsive',
            description: 'La playa Arenal-Bol tiene una longitud de 1,2 kilómetros y una anchura de 40 metros. Es una playa urbana que está cerca del casco urbano de Calpe y es de fácil acceso. Tienes zonas de juegos infantiles, de deportes náuticos, socorristas y equipos de salvamento, pasarelas, lavapiés y alquiler de toldos y hamacas. Es una playa accesible y tiene una zona adaptada con varias infraestructuras que facilitan el baño a personas con movilidad reducida.',
            location: {
                center: [0.048334, 38.6414],
                zoom: 8.5,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'nineth-identifier',
            alignment: 'right',
            hidden: false,
            title: 'La Fossa',
            image: 'https://multimedia.comunitatvalenciana.com/F933DEB9BF1046A3ADE767433C4AF5A0/img/923008D4213C49D583A56623D79B1579/Playa_del_Levante_V6A0971.jpg?responsive',
            description: 'La playa La Fossa se encuentra entre la Punta de Bassetes y el Peñón de Ifach.  De fina arena dorada, dispone de todo tipo de servicios y en las noches de verano se convierte en improvisado cine.',
            location: {
                center: [0.073678, 38.6462],
                zoom: 8.5,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'teenth-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Cantal Roig',
            image: 'https://d3fssj7n2ha5mv.cloudfront.net/listings/svo68/photos/cantalroig-gl.jpg',
            description: 'La playa del Cantal Roig es una playa de arena que tiene una longitud de 200 m, con una amplitud de 15 m. Se sitúa en un entorno urbano, disponiendo de acceso por calle. Cuenta con aparcamiento delimitado. Es una playa balizada.',
            location: {
                center: [0.057008, 38.6417],
                zoom: 8.5,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'eleventh-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Carrer de la Mar',
            image: 'https://multimedia.comunitatvalenciana.com/D523F9D8EE4D4B3C9CFB5DCB6709AE40/img/68A7CF811B7448AEB9F555513933EC70/1765728262126PLAYA_CARRER_LA_MAR6697454981005407613.jpg?responsive',
            description: 'La playa del Carrer la Mar cuenta con cerca de 2 km de longitud y unos 30 de anchura, con arena fina y dorada. La orilla es poco profunda, lo que la convierte en un lugar perfecto para familias. Además, ofrece servicio de biblioteca en verano y animación infantil ',
            location: {
                center: [-0.389184, 38.4274],
                zoom: 8.5,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'twelveth-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Mutxavista',
            image: 'https://multimedia.comunitatvalenciana.com/C0D61F6F5B784A459F381B96CEDB0244/img/CE5BEB95BBAE402B91769FD33D52327F/El_Campello_PLAYA_DE_MUCHAVISTA_2.jpg?responsive',
            description: 'La playa de Mutxavista es una playa de arena dorada y fina donde se pueden practicar deportes acuáticos. Ademñas es una playa accesible.',
            location: {
                center: [-0.404842, 38.4018],
                zoom: 8.5,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'thirteenth-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Les Bovetes',
            image: 'https://multimedia.comunitatvalenciana.com/5FD074387D5445D993587C5914376E36/img/64F7FD44045841108790A4E0244E8727/Les_Bovetes_7H9A8600.jpg?responsive',
            description: 'La playa les Bovetes en Dénia es una opción que todos pueden disfrutar por igual, ya que además de estar conectada con el tejido urbano cuenta con una interesante zona preparada para facilitar las cosas a los visitantes con diversidad funcional física, intelectual y también visual y auditiva.',
            location: {
                center: [0.059349, 38.8612],
                zoom: 8.5,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },            
        {
            id: 'fourteenth-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Les Marines',
            image: 'https://multimedia.comunitatvalenciana.com/102E5556A84B45D1AC13FE62F08BF7EE/img/02B629F030D2425E9849364DD109D3F8/Les_Marines_7H9A8580.jpg?responsive',
            description: 'La playa Les Marines de Dénia tiene una extensión de casi 3 kilómetros. Es una playa accesible con pasarelas y servicio de baño adaptado. Encontrarás también una plataforma flotante recreativa.',
            location: {
                center: [0.094166, 38.8536],
                zoom: 8.5,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },                     
        {
            id: 'fifteenth-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Marineta Cassiana',
            image: 'https://multimedia.comunitatvalenciana.com/46668DFD81BF416583E7C670C50CCEF5/img/FA3D1C3D974F450FA89364BD773696D8/Marineta_Cassiana_7H9A8637.jpg?responsive',
            description: 'La playa Marineta Cassiana es una playa de unos 1200 metros de extensión, cercana al casco urbano y que cuenta con arena fina y limpia además de aguas tranquilas. Es una playa accesible a personas con diversidad funcional, que cuentan con plazas de aparcamiento para ellos.',
            location: {
                center: [0.121898, 38.8349],
                zoom: 8.5,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },                     
        {
            id: 'sixteenth-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Punta del Raset',
            image: 'https://multimedia.comunitatvalenciana.com/5A9C8FEA2DC94FF1A68E5ED407816FD0/img/82312C186AC349078A4FDCE03AD4B48F/Punta_del_Raset_7H9A8631.jpg?responsive',
            description: 'La playa Punta del Raset es una pequeña ensenada de arena gruesa de color rojizo y aguas limpias, muy cercana al puerto de Dénia y a su club náutico. La playa tiene una extensión de 570 metros y una amplitud media de unos 75 metros. Las dunas que se generan en esta playa le aportan un extra de valor paisajístico.',
            location: {
                center: [0.112056, 38.8474],
                zoom: 8.5,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }, 
        {
            id: 'seventeenth-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Arenals del Sol-Sur',
            image: 'https://multimedia.comunitatvalenciana.com/39987E1460F247CEBEE79A596E9D6698/img/717DE2327E61474297D74C900691CDB9/Elche_playa_Arenales_del_Sol.jpg?responsive',
            description: 'La playa Arenals del Sol es una playa de arena fina dorada en una zona de alta belleza que presenta, además, un sistema dunar único. Es una playa adaptada para personas con movilidad reducida.',
            location: {
                center: [-0.515661, 38.2475],
                zoom: 8.5,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },                      
        {
            id: 'eighteenth-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Carabassí',
            image: 'https://multimedia.comunitatvalenciana.com/CB50D57276854D649394ED4F1F375800/img/D1F8FE52E7C64C05800B307B8C4FF0D5/playa_carabassi__MG_9460.jpg?responsive',
            description: 'La Playa el Carabassí se extiende a lo largo de casi un kilómetro y tiene una anchura de 80 metros, y es un lugar perfecto para practicar deportes náuticos como windsurf o kitesurf. Está bordeada de masas arbóreas, con pinos, lo que le da un toque natural y una relevancia ambiental que la hace muy especial.',
            location: {
                center: [-0.510636, 38.2249],
                zoom: 8.5,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'nineteenth-chapter',
            alignment: 'left',
            hidden: false,
            title: 'L’Altet',
            image: 'https://multimedia.comunitatvalenciana.com/0167C351122941C781642583ED15BE18/img/8232C375275B476FBB191377B5015027/Playa_LAltet_foto_elviraalmodovar_1.jpg?responsive',
            description: 'Esta singular playa natural, de arena fina y de un color casi blanco tiene una longitud cercana a los dos kilómetros. Posee un sistema dunar único en el que se pueden encontrar varias especies endémicas de vegetación',
            location: {
                center: [-0.514412, 38.2392],
                zoom: 20,
                pitch: 60,
                bearing: -43
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'twentieth',
            alignment: 'left',
            hidden: false,
            title: 'Barranco Rubio',
            image: 'https://multimedia.comunitatvalenciana.com/9898627E6A7C495096F7637729ADF1B2/img/3E4B47729D184D81AD3457B0AED6AC7B/barrancorubio_orihue_costablanca2.jpg?responsive',
            description: 'La playa de Barranco Rubio es una playa de arena fina, con un bonito paisaje de aspecto natural que cuenta con más de 600 m de longitud. Es un destino accesible y cómodo para todo tipo de visitantes, incluidas las personas con movilidad reducida, gracias a su silla anfibia, zona de sombraje específica y aparcamiento adaptado.',
            location: {
                center: [-0.515661, 38.247537],
                zoom: 8.5,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'twenty first-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Bon Nou',
            image: 'https://multimedia.comunitatvalenciana.com/229AF5FBC9D24215B5B13E78E14491A6/img/E3E3091804814852A0E3126785B48561/playa_bon_nou_MG_9964.jpg?responsive',
            description: 'Bon Nou es una cala rústica, de gran belleza y de aguas cristalinas y transparentes, con una superficie de arena y piedra, donde la tranquilidad reina habitualmente. Está ubicada entre dos grandes rocas, con lo que el oleaje es mínimo',
            location: {
                center: [-0.261908, 38.497649],
                zoom: 8.5,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'twenty second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Cabo Cervera',
            image: 'https://multimedia.comunitatvalenciana.com/E6B07B5E79374AB695209FDB720F398D/img/724233005C7249E48E9748096409B19D/CALA_CABO_CERVERA.jpg?responsive',
            description: 'La cala Cabo Cervera alterna arena y roca. Diversas teorías indican que este podría ser el emplazamiento en el que se ubicó el poblado originario de Torrevieja',
            location: {
                center: [-0.648905, 38.005771],
                zoom: 8.5,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'twenty third-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Cabo Roig -La Caleta',
            image: 'https://multimedia.comunitatvalenciana.com/9898627E6A7C495096F7637729ADF1B2/img/38F71291128348FF83E50310D09AB082/lacaleta_oroihuela_costablanca4.jpg?responsive',
            description: 'La Caleta tiene una longitud de 387 metros y una superficie que se extiende por encima de los 16.000 m2. Las aguas de esta playa son muy tranquilas ya que el propio cabo, con sus paredes rocosas, nos resguarda.',
            location: {
                center: [-0.733159, 37.911891],
                zoom: 8.5,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'twenty fourth-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Cala Capitán',
            image: 'https://multimedia.comunitatvalenciana.com/D1719C5FB6F44BC68E58E3C4F555C65D/img/E4FFA1973FEF4D6BA2DCD5151A444319/6-cala_capitan-caboroig1_orihuela.jpg?responsive',
            description: 'Cala Capitán, en Orihuela, en La Vega Baja, es una auténtica joya. Sus aguas cristalinas, la suave arena fina y la pequeña isla del Carmen como telón de fondo crean un entorno único y relajante.',
            location: {
                center: [-0.722162, 37.92042],
                zoom: 8.5,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
{
            id: 'twenty fifth-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Cala de las Piteras',
            image: 'https://multimedia.comunitatvalenciana.com/E6B07B5E79374AB695209FDB720F398D/img/953420DDB1734F7796903EF9D43A19B1/CALA_PITERAS.jpg?responsive',
            description: 'La Cala Piteras cuenta con 1.860 metros cuadrados de arena y una longitud de 123 metros. Entre otros servicios, esta playa cuenta con puesto de la Cruz Roja, aseo adaptado para personas con movilidad reducida, dos lavapiés, rampa de acceso adaptada, punto limpio y una zona de baño balizada.',
            location: {
                center: [-0.705507, 37.946231],
                zoom: 8.5,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'twenty sixth-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Calas del Este',
            image: 'https://multimedia.comunitatvalenciana.com/FEB4DC4390954B59BFAEE8C8FC39EFD6/img/F7704D875BF9410483D871D2FCAA86A7/Calas_Santa_Pola_del_Este_2.jpg?responsive',
            description: 'Calas del Este es una tranquila zona residencial declarada de Interés Turístico Nacional. Posee un paseo marítimo peatonalizado en el que se puede disfrutar de un paseo agradable y contemplar el atractivo paisaje.',
            location: {
                center: [-0.524602, 38.192835],
                zoom: 8.5,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
{
            id: 'twenty seventh-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Campoamor',
            image: 'https://static.laverdad.es/comun/movil2016/imagenes_playas/0000276.jpg',
            description: 'La playa Campoamor es una de las mayores extensiones arenosas del litoral oriolano. Perfectamente adaptada, cuenta con baño asistido para personas con diversidad funcional, con servicio de silla anfibia para poder refrescarse en sus aguas. A tan solo unos metros de la zona de baño, un puente nos da paso a una extensión de bosque mediterráneo.',
            location: {
                center: [-0.749722, 37.898795],
                zoom: 8.5,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
{
            id: 'twenty eighth-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Guardamar-Centre',
            image: 'https://multimedia.comunitatvalenciana.com/4E5FA4A0F9044F428C96FFD42B5AFAC7/img/E0E5A0CB54E54A398011EF77826C3103/Playa_Centro_Guardamar_del_Segura_1.jpg?responsive',
            description: 'La playa Centro de Guardamar del Segura cuenta con 427 metros de arena dorada. Esta playa se sitúa en el límite sur de las dunas de esta localidad, un ecosistema muy valioso, y muy próxima al casco urbano. Tiene aguas transparentes y un ambiente familiar.',
            location: {
                center: [-0.651887, 38.080588],
                zoom: 8.5,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
{
            id: 'twenty ninenth-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Vila Joiosa-Ciutat (Centre)',
            image: 'https://static1.comunitatvalenciana.com/sites/default/files/img/imagen/2008/12/03/vila_joiosa_centro_033_1_2_3_2_4.jpg',
            description: 'La playa Ciutat es una playa con una importante extensión de arena fina y clara. Un bonito paseo, lleno de palmeras, la recorre y da acceso a ella y al Mediterráneo que, en este tramo, tiene un color azul intenso. Es una playa adaptada para personas con movilidad reducida.',
            location: {
                center: [-0.226479, 38.5069],
                zoom: 8.5,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
{
            id: 'thirtieth-identifier',
            alignment: 'right',
            hidden: false,
            title: 'El Cura',
            image: 'https://multimedia.comunitatvalenciana.com/78596F55867A4182BC60B96C372A9D66/img/2688DCE3DA9E41FDA1C20C6855BBF585/Torrevieja_PlayadelCura0_2688DCE3DA9E41FDA1C20C6855BBF585size-medium.jpg',
            description: 'La Playa del Cura es la playa más céntrica de Torrevieja. Es una playa de arena fina y dorada con un bonito entorno de palmeras.',
            location: {
                center: [-0.667532, 37.97902],
                zoom: 8.5,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'thirty first-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Higuericas',
            image: 'https://multimedia.comunitatvalenciana.com/B5DC1A2153A54EC8A4B5DD860BC13DEA/img/AFD26F11F7B64732BC918897FFF32DB0/Pilar_de_la_Horadada_PLAYA_DE_HIGUERICAS_1_2.jpg?responsive',
            description: 'La Playa de Higuericas es una fantástica playa accesible, con parking y aseos adaptados, rampa de acceso y silla anfibia. Además, cuenta con una zona para niños, chiringuito, servicio de primeros auxilios y lavapiés. Además,  existe una formación dunar en proceso de regeneración, lo que le da un aspecto natural que invita a desconectar. ',
            location: {
                center: [-0.763286, 37.850987],
                zoom: 8.5,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },                     
        {
            id: 'thirty second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Jesuitas',
            image: 'https://multimedia.comunitatvalenciana.com/4686150671FE4BD98699F644287E92D8/img/76B8B0C0F1FA4727B2BDB3CA944DE14F/Playa_jesuitas_1920_1080.jpg?responsive',
            description: '',
            location: {
                center: [-0.755863, 37.850987],
                zoom: 8.5,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },                     
{
            id: 'thirty third-identifier',
            alignment: 'right',
            hidden: false,
            title: 'La Caleta',
            image: 'https://static1.comunitatvalenciana.com/sites/default/files/img/imagen/2008/12/03/vila_joiosa_la_caleta_022_0_1_2_3_2_0.jpg',
            description: 'La playa de La Caleta en Villajoyosa es una cala que combina los cantos finos y la grava y tiene una longitud de 139 metros. El entorno natural que la rodea es uno de sus mayores atractivos: hay palmeras a pie de playa y vegetación mediterránea.',
            location: {
                center: [-0.270317, 38.493667],
                zoom: 8.5,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'thirty fourth-identifier',
            alignment: 'left',
            hidden: false,
            title: 'La Grava',
            image: 'https://multimedia.comunitatvalenciana.com/AD4BEABE42B94D4692AA46751E674341/img/C15FD4C4EED14370AACBE009CCC37AA6/Xabia_La_Grava.jpg?responsive',
            description: 'La playa La Grava es una playa urbana que cuenta con una extensión de 290 metros y su ocupación suele ser media. Recibe su nombre porque está formada por grava, es decir, piedra de canto rodado, aunque también podemos encontrar arena con gravilla y roca en algunas zonas, lo que la convierte en ideal para el baño con niños. ',
            location: {
                center: [0.183395, 38.796088],
                zoom: 8.5,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'thirty fifth-identifier',
            alignment: 'right',
            hidden: false,
            title: 'La Marina',
            image: 'https://multimedia.comunitatvalenciana.com/A93DE4ED23C04E52980BE71BBE3156A5/img/A19023FE788A4C6484E2CFB83EB1C85B/Playa_de_La_Marina_2.jpg?responsive',
            description: 'Con una longitud de 1.100 metros y una anchura media de unos 35 metros, esta playa de Elche destaca por su composición de arena fina y aguas limpias. En la playa La Marina tienes servicio de salvamento y socorrismo, WCs públicos, la posibilidad de alquilar hamacas y sombrillas y un quiosco abierto durante la temporada de verano. También hay un punto accesible de baño.',
            location: {
                center: [-0.635298, 38.140351],
                zoom: 8.5,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'thirty sixth-identifier',
            alignment: 'right',
            hidden: false,
            title: 'La Roqueta',
            image: 'https://multimedia.comunitatvalenciana.com/8BF3C27847FE470DA8D7E739FA2F9C16/img/EC22275BE09B4600A57188562A7E2603/Playa_de_la_Roqueta_1920_1080_2.jpg?responsive',
            description: 'La playa de La Roqueta cuenta con accesos adaptados y destaca por su arena fina y sus aguas tranquilas.',
            location: {
                center: [-0.647695, 38.075678],
                zoom: 8.5,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'thirty seventh-identifier',
            alignment: 'right',
            hidden: false,
            title: 'La Zenia- Cala Bosque',
            image: 'https://multimedia.comunitatvalenciana.com/9898627E6A7C495096F7637729ADF1B2/img/6801CFEBCB3E44AEBDE6FE50915919F9/calabosque_orihuela_costablanca3.jpg?responsive',
            description: 'Cala Bosque es una playa de 258 metros de longitud y 105 de amplitud. También es conocida como playa de La Zenia. Esta porción de la costa oriolana es muy extensa, con una superficie de 27.090 m². Hay un punto accesible con sillas anfibias en el que se ayuda a las personas con movilidad reducida a darse un baño. También encontrarás pasarelas más anchas de lo habitual que facilitan el acceso de las sillas de ruedas.',
            location: {
                center: [-0.722099, 37.923665],
                zoom: 8.5,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'thirty eigth-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Les Pesqueres-El Rebollo',
            image: 'https://multimedia.comunitatvalenciana.com/EEFCED23BAD54117888B95A25C22F527/img/10B10C9438954DFBB352BD84BA6F7E02/Les_Pesqueres_-_El_Rebollo-_MG_9424.jpg?responsive',
            description: 'La playa Les Pesqueres-El Rebollo se encuentra entre la desembocadura del río Segura y la Marina. Tiene la consideración de playa virgen y casi salvaje gracias a su fina arena y al respeto por el medio ambiente que evoca. Es una playa con 1360 metros de longitud, perfecta para el baño gracias a sus aguas tranquilas y lejos de aglomeraciones. ',
            location: {
                center: [-0.638856, 38.129095],
                zoom: 8.5,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'thirty nineth-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Les Platgetes',
            image: 'https://multimedia.comunitatvalenciana.com/8EB2467489064145924B82998A53FE79/img/CA04348721FE4F2D9B60333479AE053B/TEULADA_MORAIRA_ESPACIO_PLAYA_PLATGETES4.jpg?responsive',
            description: 'Les Platgetes son dos pequeñas calas de aguas transparentes que alternan zona de arena y de roca. Disponen de un atractivo paseo-mirador con zona ajardinada y aparcamiento. En verano cuentan con canal de acceso a embarcaciones, socorrismo, vigilancia, lavadero de pies, aseos y pasarelas.  ',
            location: {
                center: [0.12791, 38.687318],
                zoom: 8.5,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourtieth-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Los Locos',
            image: 'https://multimedia.comunitatvalenciana.com/83AAAC9F2E624EF7B403E0E4A2BC85C4/img/999FC36C48294C2FA713F35851573DCD/Torrevieja_PlayadelosLocos0_999FC36C48294C2FA713F35851573DCDsize-medium.jpg',
            description: 'La Playa de los Locos se llama así por un antiguo sanatorio que se ubicaba en sus inmediaciones. Cuenta con una fantástica extensión de arena fina y dorada y también una zona de rocas, esta última con accesos en escalera al mar. ',
            location: {
                center: [-0.659685, 37.984827],
                zoom: 8.5,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'forty first-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Los Naúfragos',
            image: 'https://multimedia.comunitatvalenciana.com/E6B07B5E79374AB695209FDB720F398D/img/4C9BD8AD50E24C3595FAB03DEA82C649/064A9559D.jpg?responsive',
            description: 'La Playa de los Náufragos tiene una extensión de unos 300 metros y una anchura de 40 metros aproximadamente. Si te acercas a visitarla encontrarás una arena fina y dorada y unas aguas tranquilas, excepto cuando sopla el viento. Esta playa no está protegida por ningún tipo de accidente geográfico, así que muchas embarcaciones que se cruzaban con temporales acababan varadas en su costa. De ahí que se conozca como Playa de los Náufragos. ',
            location: {
                center: [-0.69549, 37.970388],
                zoom: 8.5,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'forty second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Orihuela-Mil Palmeras',
            image: 'https://multimedia.comunitatvalenciana.com/D1719C5FB6F44BC68E58E3C4F555C65D/img/D93E85FFABAE45A1A1E2675696D79583/11-playa_milpalmeras-orihuela.jpg?responsive',
            description: 'La playa Mil Palmeras de Orihuela se sitúa en la desembocadura de la Cañada de Matamoros. Es una playa natural y abierta, de arena fina y blanca, ideal para relajarse. Sus paredes son rocosas; el entorno natural queda delimitado por la acción de ramblas que disponen de senderos con un innegable valor paisajístico. Cuenta 346 metros de longitud y una superficie total de 15.570 m2.',
            location: {
                center: [-0.753383, 37.879816],
                zoom: 8.5,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'forty third-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Pilar de la Horadada- Mil Palmeras',
            image: 'https://multimedia.comunitatvalenciana.com/ADA993625B734DFA99F4B2B93EBAD98B/img/503AA48C0F31481085F2F875DFFF5B79/Playa_mil_palmeras_1920_1080.jpg?responsive',
            description: 'La playa Mil Palmeras, en Pilar de la Horadada, es una de las más accesibles para personas con movilidad reducida y también de las más ambientadas gracias a sus numerosos servicios, como zona de ocio infantil, alquiler de pequeñas embarcaciones y servicio de hamacas. Por las noches, en verano, el paseo junto a la playa Mil Palmeras se anima con un mercadillo artesanal que se prolonga hasta pasada la medianoche. De septiembre a diciembre y de febrero a mayo, acoge un programa gratuito con actividades para todas las edades, como ludoteca, patinaje, zumba, aerobox, taichí y yoga, perfecto para disfrutar de la playa todo el año.',
            location: {
                center: [-0.753383, 37.879816],
                zoom: 8.5,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'forty fourth-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Paradís',
            image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2d/2d/14/f6/caption.jpg?w=700&h=400&s=1',
            description: 'Playa Paradís es una playa abierta que mantiene su entorno natural, con zonas de arena fina y dorada y áreas de grava. Las palmeras forman parte de este entorno, en una playa a la que se puede acceder fácilmente.',
            location: {
                center: [-0.253727, 38.499304],
                zoom: 8.5,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
{
            id: 'forty fifth-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Puerto',
            image: 'https://multimedia.comunitatvalenciana.com/4CE2B7C0BF0C4399A1BC4AF05052CD2B/img/0AAA707234394CB59C42896E6F554983/Pilar_de_la_Horadada_Playa_El_Puerto_1.jpg?responsive',
            description: 'En pleno puerto deportivo, la playa Puerto de Pilar de la Horadada, combina ambiente marinero y ocio activo. Se sitúa junto al Club Náutico, que en verano organiza cursos de vela y regatas, además de convertirse en escenario de campeonatos deportivos, travesías a nado y actividades que llenan de vida esta playa portuaria. Dispone de múltiples servicios: agua potable, papeleras, lavapiés, contenedores de reciclaje, zona de baño, aseos adaptados, aparcamiento, incluido para personas con discapacidad, punto de primeros auxilios, sillas anfibias, salvamento y socorrismo, teléfono, así como información turística y paneles informativos.',
            location: {
                center: [-0.761501, 37.863974],
                zoom: 8.5,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },                     
        {
            id: 'forty sixth-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Punta Prima',
            image: 'https://multimedia.comunitatvalenciana.com/D1719C5FB6F44BC68E58E3C4F555C65D/img/7FA407902C8B4D35901E40BE1A98D087/1_playa_puntaprima_orihuela.jpg?responsive',
            description: 'La playa de Punta Prima tiene una longitud de 234 metros y una superficie de 6.552 m2. Se sitúa en un enclave singular, en el que la naturaleza y la tecnología se dan de la mano. De hecho, una de las mayores curiosidades es que Punta Prima cuenta con un ascensor que facilita la accesibilidad a las personas con diversidad funcional.',
            location: {
                center: [-0.709, 37.874523],
                zoom: 8.5,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },                     
        {
            id: 'forty seventh-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Varadero',
            image: 'https://static1.comunitatvalenciana.com/sites/default/files/img/imagen/2008/12/03/vila_joiosa_playa_varadero_estudiantes_055_0_1_2_3_2_4.jpg',
            description: 'La denominación de la Playa Varadero proviene del varadero que estaba junto a la misma. Anteriormente se denominaba Playa de los Ingenieros, pues los ingenieros del varadero vivieron en sus inmediaciones. Por otra parte, era el punto de concentración para la tradicional celebración de la tarde de la mona de Pascua.',
            location: {
                center: [-0.2103, 38.510758],
                zoom: 8.5,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },   
        {
            id: 'forty eighth-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Varador',
            image: 'https://multimedia.comunitatvalenciana.com/A0D576E12A6C41D4A1120C64FC481DE2/img/D0F799666F50406DA8929039D47BC9EB/Playa_Varadero_3.jpg?responsive',
            description: 'Es una atractiva playa semiurbana de fina arena y tranquilas aguas. Ideal para pasear, tomar el sol y descansar mientras podemos vislumbrar en el horizonte la increíble isla de Tabarca.',
            location: {
                center: [-0.535671, 38.190604],
                zoom: 8.5,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }                              
    ]
};
