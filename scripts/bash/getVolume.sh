amixer sget -D default 'Master'| grep "\[[0-9]*%\]" -o | sed -e "s/\[//g" -e "s/\]//g" -e "s/%//g"