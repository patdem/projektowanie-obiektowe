program BubbleSortProgram;

type intArr = array[1..50] of integer;

var a: intArr;
k: integer;
n: integer = 50;

procedure randomArr(var arr: intArr);
var i: integer;
begin
        Randomize;

        for i := 0 to n do
        begin
                arr[i] := Random(100);
        end;
end;

procedure bubbleSort(var arr: intArr);
var i, j: integer;
temp: integer;
begin
        for i := 2 to n do
                for j := n downto i do
                        if arr[j-1] > arr[j] then
                begin
                        temp := arr[j-1];
                        arr[j-1] := arr[j];
                        arr[j] := temp;
                end;
        end;

begin
        writeln('Bubble Sort');
        randomArr(a);
        for k:=1 to n do write(a[k],' ');
	writeln('');
        bubbleSort(a);
        for k:=1 to n do write(a[k],' ');
	writeln('');
end.

