import imgPergamino from "@/assets/PRODUCTOS/CAFEPERGAMINOSECO.png";
import imgOroVerde from "@/assets/PRODUCTOS/CAFEOROVERDE.png";
import imgPergaminoSaco from "@/assets/PRODUCTOS/cafepergaminosinfondo.png";
import imgOroSaco from "@/assets/PRODUCTOS/cafeorosinfondo.png";
import imgTostado from "@/assets/PRODUCTOS/CAFETOSTADO(ACTUALIZADO).png";
import imgTostadoMolido from "@/assets/PRODUCTOS/CAFETOSTADOYMOLIDO.png";

export const products = [
    {
        name: "Café Pergamino",
        description: "Café producido por los socios manejado con buenas prácticas agrícolas y procesos de calidad en cosecha y post cosecha.",
        image: imgPergamino,
        presentations: [
            { label: "Presentación en saco", image: imgPergaminoSaco },
            { label: "", image: imgPergamino },
        ],
        price: "Según bolsa de valores",
        unit: "por quintal",
        features: [
            "Cuidadosamente seleccionado y procesado",
            "Cafés de procesos limpios",
            "Fermentación aeróbica y anaeróbica"
        ],
        badge: "Exportación",
        technicalDetails: [
            { label: "Denominación", value: "Café Pergamino Seco" },
            { label: "Variedades", value: "Geysha, Caturra, Catuaí, Catimor, Obata rojo" },
            { label: "Altitud", value: "1,500 – 1,800 msnm" },
            { label: "Origen", value: "Felipe Pinglo Alva, Luyando, Huánuco – Perú" },
            { label: "Proceso", value: "Cosecha selectiva, fermentación controlada, secado solar, humedad 10-12%" },
            { label: "Características", value: "Granos uniformes, limpios, sin defectos primarios visibles" },
            { label: "Presentación", value: "Sacos de polipropileno de 50 kg" },
            { label: "Vida Útil", value: "6 a 12 meses en condiciones óptimas" }
        ]
    },
    {
        name: "Café Oro Verde",
        description: "Grano de alta calidad listo para el proceso de tostado, es el resultado del trabajo cuidadoso de nuestros productores.",
        image: imgOroVerde,
        presentations: [
            { label: "Presentación en saco", image: imgOroSaco },
            { label: "", image: imgOroVerde },
        ],
        price: "Según bolsa de valores",
        unit: "por quintal",
        features: [
            "Seleccionado por defectos primarios",
            "Granulometría uniforme",
            "Humedad adecuada para tostado"
        ],
        badge: "Premium",
        technicalDetails: [
            { label: "Denominación", value: "Café Oro Verde" },
            { label: "Variedades", value: "Geysha, Caturra, Catuaí, Catimor, Obata rojo" },
            { label: "Altitud", value: "1,500 – 1,800 msnm" },
            { label: "Proceso", value: "Trilla mecánica, clasificación por tamaño y densidad, selección de defectos" },
            { label: "Humedad", value: "10 % – 12 %" },
            { label: "Perfil Sensorial", value: "Limpio, floral, frutal, dulce natural, acidez brillante" },
            { label: "Presentación", value: "Sacos de yute o polipropileno de 50 kg" },
            { label: "Rendimiento", value: "78 % – 82 % (de pergamino a oro verde)" }
        ]
    },
    {
        name: "Café Tostado 1KG",
        description: "Ideal para consumo local y comercialización. Café de especialidad con notas excepcionales.",
        image: imgTostado,
        presentations: null,
        price: "S/. 55.00",
        unit: "por 1kg",
        features: [
            "Café de especialidad 80-85 puntos",
            "Variedades Catuaí, Caturra y Geisha",
            "Tostado artesanal"
        ],
        badge: "Popular",
        technicalDetails: [
            { label: "Denominación", value: "Café Tostado en Grano" },
            { label: "Nivel de Tostado", value: "Medio / Medio oscuro (artesanal y controlado)" },
            { label: "Perfil Sensorial", value: "Aroma floral/frutal, notas a jazmín y chocolate suave, cuerpo sedoso" },
            { label: "Materia Prima", value: "Café oro verde seleccionado (humedad 10-12%)" },
            { label: "Empaque", value: "Bolsa trilaminada con válvula desgasificadora" },
            { label: "Vida Útil", value: "6 a 8 meses cerrado" },
            { label: "Uso Recomendado", value: "Consumo doméstico, cafeterías, restaurantes" }
        ]
    },
    {
        name: "Café Tostado y Molido 1KG",
        description: "Presentación lista para venta directa al consumidor, ideal para ferias y puntos de comercio local.",
        image: imgTostadoMolido,
        presentations: null,
        price: "S/. 60.00",
        unit: "por 1kg",
        features: [
            "Café de especialidad 80-85 puntos",
            "Variedades Catuaí, Caturra y Geisha",
            "Listo para preparar"
        ],
        badge: "Artesanal",
        technicalDetails: [
            { label: "Denominación", value: "Café Tostado y Molido" },
            { label: "Tipos de Molienda", value: "Gruesa (Prensa), Media (Filtro), Fina (Espresso)" },
            { label: "Nivel de Tostado", value: "Medio / Medio oscuro" },
            { label: "Perfil Sensorial", value: "Dulce balanceado, jazmín, frutas tropicales, chocolate suave" },
            { label: "Materia Prima", value: "Café oro verde seleccionado" },
            { label: "Empaque", value: "Bolsa trilaminada con válvula desgasificadora" },
            { label: "Vida Útil", value: "6 meses (consumir en 30 días una vez abierto)" },
            { label: "Uso Recomendado", value: "Métodos de filtro, italiana, prensa francesa, espresso" }
        ]
    }
];
