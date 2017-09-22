```
SELECT
  apartmentsApril19.title,
  apartmentsApril19.citystate,
  apartmentsApril19.rent as AprRent,
  apartmentsSep22.rent as SepRent,
  apartmentsSep22.rent - apartmentsApril19.rent as Diff
FROM `apartmentsApril19`
join apartmentsSep22 on apartmentsSep22.title = apartmentsApril19.title
and apartmentsSep22.citystate = apartmentsApril19.citystate  
ORDER BY `Diff` ASC
```
