#RESULTS and CONCLUSIONS
###Using R to understand the leading causes of death among refugees coming to Europe
######Rufus Raghunath - Makers Academy week 06 (independent project)


##CONCLUSION
Overall fatalities are increasing and the highest-risk group are refugees traveling into Europe by sea in January via the Western Mediterranean Route. Drowning and exhaustion account for the vast majority of refugee disaster incidents.

##SUMMARY OF RESULTS
Drowning and exhaustion related incidents are by far the most deadly. These incidents have the highest mean death/missing count, as well as the highest count for any one incident (800), thus far surpassing intentional causes of death such as malicious intent (e.g. murder, manslaughter) and authority-related death (e.g. police brutality, torture). Devoting effort to preventing shipwrecks or providing better coastguard/disaster response aid to the affected nautical routes could massively reduce refugee morbidity.

The last 15 years have varied greatly in how fatal a given disaster incident is (i.e. how many person die or go missing as a result). In general, incidents have become a good deal more fatal, meaning that any one incident is likely to result in more deaths than before. This may be explained by a greater number of total refugees, thus increasing the number of potential victims of any one incident.

Time of year (month) does not appear to affect the mean dead/missing count per incident. This may be explained by the fact that the greatest number of fatalities is accounted for by drowning/exhaustion, which is likely to result in the same fatality rate at any time of year.

Across various comparisons, January appears to be most deadly month (highest frequency of incidents reported). This may be due to the presence of more extreme weather conditions, particularly given the finding that drowning and exhaustion incidents account for the majority of refugee deaths (i.e. ships are more likely to founder in bad weather). It follows that aid efforts should be particularly intensified in winter.

2008 deadliest year?

WMR deadliest route?

N.B.:
In order to compare relative rather than absolute deadliness of refugee routes, these analyses still need to be adjusted for the number of refugees traveling on each route.



##TECHNICAL RESULTS

###ABBREVIATIONS USED
Cause of death:

- DOE - Drowning or exhaustion
- AUT - Authority-related death
- SUI - Suicide
- VIO - Violent accidental death
- MAL - Malicious intent
- UNK - Unknown
- OTH - Other

Route taken:

- ACR - Apulia and Calabria Route
- WMR - Western Mediterranean Route
- CMR - Central Mediterranean Route
- EMR - Eastern Mediterranean Route
- WAR - Western African Route
- UNK - Unknown


###ANOVA
Significant differences (p<0.05) in mean number of persons dead/missing per disaster incident were found between:

Cause of death

- DOE and AUT
- DOE and SUI
- UNK and SUI

Year

- 2011 and 2000
- 2014 and 2000
- 2015 and 2000
- 2011 and 2001
- 2014 and 2001
- 2015 and 2001
- 2014 and 2002
- 2015 and 2002
- 2001 and 2003
- 2014 and 2003
- 2015 and 2003
- 2011 and 2004
- 2014 and 2004
- 2015 and 2004
- 2014 and 2005
- 2015 and 2005
- 2011 and 2006
- 2014 and 2006
- 2011 and 2007
- 2014 and 2007
- 2011 and 2008
- 2014 and 2008
- 2015 and 2008
- 2011 and 2009
- 2014 and 2009
- 2015 and 2010
- 2012 and 2011
- 2014 and 2012
- 2014 and 2013
- 2015 and 2014
- 2016 and 2014

Route

- coming soon...


###CHI-SQUARED
The following distributions were found to be non-independent (p<0.05):

Cause of death * Month

- DOA and UNK
- MAL and UNK
- SUI and UNK

Cause of death * Year

- AUT and DOE
- AUT and OTH
- AUT and SUI
- AUT and UNK
- AUT and VIO
- DOE and MAL
- DOE and OTH
- DOE and SUI
- DOE and UNK
- DOE and VIO
- MAL and OTH
- MAL and SUI
- MAL and UNK
- OTH and UNK
- OTH and VIO
- SUI and UNK
- SUI and VIO
- UNK and VIO

Cause of death * Route taken

- coming soon...

Cause of death * Year

- AUT and DOE
- AUT and OTH
- AUT and SUI
- AUT and UNK
- AUT and VIO
- DOE and MAL
- DOE and OTH
- DOE and SUI
- DOE and UNK
- DOE and VIO
- MAL and OTH
- MAL and SUI
- MAL and UNK
- OTH and UNK
- OTH and VIO
- SUI and UNK
- SUI and VIO
- UNK and VIO

Route taken * Month

- UNK and ACR
- UNK and EMR
- UNK and WAR
- CMR and EMR
- CMR and WAR
- CMR and WMR
- EMR and WAR
- EMR and WMR