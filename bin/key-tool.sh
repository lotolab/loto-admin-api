#!/bin/bash 
# seed=abcdefghjkmnpqrstuvwxyz123456789ABDCEFGHJKLMNPQRSTUVW_
seed=$-.abcdefghjkmnpqrstuvwxyz123456789ABDCEFGHJKLMNPQRSTUVW_
size=17

if [ $# -gt 0 ];then
  if [[ $1 -ge 10 && $1 -le 32 ]];then
    size=$1
  fi 
fi

ID=$(npx nanoid --alphabet $seed --size $size)
echo -e "\033[31m\n$ID\n\033[0m"