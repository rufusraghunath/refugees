# This function returns the total number of incidents per route per ordinal variable, e.g. df could take a value of refugee_data$route

getTotals = function(df){

  levs = levels(df)
  array = c()
  for(r in levs)
  {
    total = NROW(df[df == r])
    print(r)
    print(total)
    array = append(array, r)
    array = append(array, total)
  }
  return(array)
}
