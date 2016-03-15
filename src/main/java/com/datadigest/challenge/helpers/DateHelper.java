package com.datadigest.challenge.helpers;

import java.time.LocalDate;
import java.time.Month;
import java.time.Year;
import java.util.HashMap;
import java.util.Map;

public class DateHelper {


    public static Map<String, LocalDate> getDatesBasedOnTerm(int term) {

        Map<Integer, Map<String, LocalDate>> terms = new HashMap<>();
        terms.put(1, getTerm(LocalDate.of(Year.now().getValue(), Month.JANUARY, 13),
                LocalDate.of(Year.now().getValue(), Month.MARCH, 18)));
        terms.put(2, getTerm(LocalDate.of(Year.now().getValue(), Month.APRIL, 5),
                LocalDate.of(Year.now().getValue(), Month.JUNE, 24)));
        terms.put(3, getTerm(LocalDate.of(Year.now().getValue(), Month.JULY, 18),
                LocalDate.of(Year.now().getValue(), Month.SEPTEMBER, 30)));
        terms.put(4, getTerm(LocalDate.of(Year.now().getValue(), Month.OCTOBER, 10),
                LocalDate.of(Year.now().getValue(), Month.DECEMBER, 7)));

        return terms.get(term);
    }

    private static Map<String, LocalDate> getTerm(final LocalDate startDate, final LocalDate endDate) {
        return new HashMap<String, LocalDate>() {{
            put("startDate", startDate);
            put("endDate", endDate);
        }};
    }
}
