package com.datadigest.challenge.helpers;

import java.util.*;

public class DateHelper {


    public static Map<String, Date> getDatesBasedOnTerm(int term) {

        Map<Integer, Map<String, Date>> terms = new HashMap<>();
        terms.put(1, getTerm(new GregorianCalendar(getCurrentYear(), Calendar.JANUARY, 13).getTime(),
                new GregorianCalendar(getCurrentYear(), Calendar.MARCH, 18).getTime()));
        terms.put(2, getTerm(new GregorianCalendar(getCurrentYear(), Calendar.APRIL, 5).getTime(),
                new GregorianCalendar(getCurrentYear(), Calendar.JUNE, 24).getTime()));
        terms.put(3, getTerm(new GregorianCalendar(getCurrentYear(), Calendar.JULY, 1).getTime(),
                new GregorianCalendar(getCurrentYear(), Calendar.SEPTEMBER, 30).getTime()));
        terms.put(4, getTerm(new GregorianCalendar(getCurrentYear(), Calendar.OCTOBER, 10).getTime(),
                new GregorianCalendar(getCurrentYear(), Calendar.DECEMBER, 7).getTime()));

        return terms.get(term);
    }

    private static Map<String, Date> getTerm(final Date startDate, final Date endDate) {
        return new HashMap<String, Date>() {{
            put("startDate", startDate);
            put("endDate", endDate);
        }};
    }

    private static int getCurrentYear() {
        Calendar now = Calendar.getInstance();
        return now.get(Calendar.YEAR);
    }
}
