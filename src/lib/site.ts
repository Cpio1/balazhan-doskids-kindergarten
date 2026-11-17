/**
 * Подтверждённые данные детского сада.
 * Меняйте только здесь — все кнопки и ссылки сайта берут данные отсюда.
 */
export const site = {
  name: "Балажан",
  legalName: {
    kk: "ЖШС «Доскидс» Балажан бөбекжай-балабақшасы",
    ru: "Ясли-сад «Балажан» ТОО «Доскидс»",
  },
  address: {
    kk: "Алматы облысы, Іле ауданы, Қараой ауылы, Балауса көшесі, 10",
    ru: "Алматинская область, Илийский район, село Караой, улица Балауса, 10",
  },
  phones: [
    { display: "+7 708 763 53 72", tel: "+77087635372", whatsapp: "77087635372" },
    { display: "+7 707 437 24 01", tel: "+77074372401", whatsapp: "77074372401" },
  ],
  hours: "07:30–18:00",
  instagramUrl: "https://www.instagram.com/karaoi_sadik_balazhan/",
  instagramHandle: "@karaoi_sadik_balazhan",
  /**
   * Координаты улицы Балауса в селе Қараой (сверено с 2GIS: «Улица Балауса,
   * с. Караой, Илийский район»). Дома №10 в 2GIS пока нет, поэтому метка
   * стоит на улице. Если у сада появится карточка в 2GIS — укажите её id
   * в `twoGisFirmId`, и ссылки будут вести прямо на неё.
   */
  geo: { lat: 43.52089, lon: 76.83115 },
  twoGisStreetId: "70030076311623581",
  twoGisFirmId: "",
} as const;

export type Phone = (typeof site.phones)[number];

const point = `${site.geo.lon}%2C${site.geo.lat}`;

/** «Открыть в 2GIS»: карточка организации или улица Балауса с точкой. */
export const twoGisUrl = site.twoGisFirmId
  ? `https://2gis.kz/almaty/firm/${site.twoGisFirmId}`
  : `https://2gis.kz/almaty/geo/${site.twoGisStreetId}/${point}?m=${point}%2F17`;

/** «Маршрут»: построение маршрута в 2GIS до адреса сада. */
export const twoGisRouteUrl = `https://2gis.kz/almaty/directions/points/%7C${point}%3B${site.twoGisFirmId || site.twoGisStreetId}`;

/**
 * Ключ 2GIS MapGL (бесплатно: https://dev.2gis.com). Если задан
 * NEXT_PUBLIC_2GIS_KEY — на сайте показывается интерактивная карта 2GIS.
 */
export const twoGisKey = process.env.NEXT_PUBLIC_2GIS_KEY ?? "";

export function whatsappLink(phone: Phone, text?: string) {
  const base = `https://wa.me/${phone.whatsapp}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}
