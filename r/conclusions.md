#RESULTS and CONCLUSIONS
###Using R to understand the leading causes of death among refugees coming to Europe
######Rufus Raghunath - Makers Academy week 06 (independent project)

##PLAIN ENGLISH SUMMARY
Drowning and exhaustion related incidents are by far the most deadly. These incidents have the highest mean death/missing count, as well as the highest count for any one incident (800). Devoting effort to preventing shipwrecks or providing better coastguard/disaster response aid to the affected nautical routes could massively reduce refugee morbidity.

The last 15 years have varied greatly in how fatal a given disaster incident is (i.e. how many person die or go missing as a result). In general, incidents have become a good deal more fatal, meaning that any one incident is likely to result in more deaths than before. This may be explained by a greater number of total refugees, thus increasing the number of potential victims of any one incident.

Time of year (month) does not appear to affect the mean dead/missing count per incident. This may be explained by the fact that the greatest number of fatalities is accounted for by drowning/exhaustion, which is likely to result in the same fatality rate at any time of year.

chisq


##ABBREVIATIONS USED
DOE - Drowning or exhaustion (cause of death)
ARD - Authority related death (cause of death)
SUI - Suicide (cause of death)
VAD - Violent accidental death (cause of death)
MAL - Malicious intent (cause of death)
UNK - Unknown (cause of death)


##ANOVA
Significant differences (p<0.05) in mean number of persons dead/missing per disaster incident were found between:

Cause of death
- DOE and ARD
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


##CHI-SQUARED
The following distributions were found to be non-independent:

Cause of death * Month
- DOA and UNK
- MAL and UNK
