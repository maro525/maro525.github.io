# Octave Command

eye() : 対角行列, diagonal matrix  
A = [1 2; 3 4; 5 6] : 3*2 matrix  
size(A) -> 3 2  
sz = size(A)  
size(sz) -> 1 2  
size(A, 1) -> 3  
size(A, 2) -> 2  
v = [1 2 3 4]  
length(v) -> 4  
length(A) -> 3  
A(3,2) -> 6  
A(2,:) -> 3 4 % ":" means every element along that row/column  
A(:,2) -> 2; 4; 6;  
A([1 3], :) -> 1 2; 5 6;  
A(:,2) = [10; 11; 12] -> A = [1 10, 3 11, 5 12];  
A = [A, [100;101; 102]] -> A = [1 10 100; 3 11 101; 5 12 102]  
A(:) = 1; 3; 5; 10; 11; 12; 100; 101; 102;% put all elements of A into a single vector  

------------

A = [1 2; 3 4; 5 6]  
B = [11 12; 13 14; 15 16]  
C = [1 1; 2 2]  
A*C -> [5 5; 11 11; 17 17] : multiple two matrix  
A .* B -> [11 24; 39 56; 75 96] : multiple it by the corresponding elements B  
A .^ 2 -> [1 4; 9 16; 25 36]  
log(v)  
exp(v)  
abs(v) : gives absolute value back  
A' -> [1 3 5; 2 4 6] : 転置行列  
a = [1 15 2 0.5]  
max(a) -> 15  
[val, ind] = max(a) -> val = 15, ind = 2  
max(A) -> 5 6;  
a<3 \ -> \ 1 0 1 1 : give back true or false  
find(a<3) -> 1 3 4 :  
magic(3) : 魔法陣的なやつ  
prod(a) : 最大値?  
floor(a) : 小数点以下切り捨て  
ceil(a) : 小数点切り上げ  
rand(3) : 3 * 3 の random matrix  
max(rand(3), rand(3)) : ２つのうちでかい方を返す  
max(A,[],1) : 各列の最大を返す  
max(A,[],2) : 各行の最大を返す  
max(A) : 各行の最大を返す  
max(max(A)) : 行列の中での最大値を返す  
max(A(:)) : 行列の中での最大値を返す  
sum(A,1) : sum up each column of A  
sum(A,2) : sum up each row of A  
flipud(A) : flip the matrix upside down  
pinv(A) : give inverse of A (逆行列)

----------------

load featuresX.dat : ファイル読み込み  
load ('featuresX.dat') : ファイル読み込み

who : 使える変数を表示  
whos : 使える変数 + そのお変数のデータを表示  
clear ◯◯ : 変数◯◯を削除

1:10 : 1個目から10個目めで

save ◯◯ ☓☓ : ◯◯(ファイル)に☓☓(データ)を保存する  
save ◯◯.txt ☓☓ -ascii : save as text(ASCII)

## plotting data

t = [0: 0.01: 0.98]  
y1 = sin(2*pi*4*t);  
plot(t,y1);  
hold on : hold on to plot new data  
plot(t,y2,'r')  : r = red  
xlabel('@@')  
ylabel('@@')  
legend('@@', '@@')  
title('@@')  
print -dpng '@@.png' : save the plot to png  
close : make figure go away  
figure(1): plot(t,y1);  
figure(2); plot(t,y2); : display 2 windows  
subplot(1,2,1) : divides plot a 1*2 gid, access first element  
clf : clear the figure  
imagesc(A) : grid colors  
colorbar : show color bar  
colormap gray : change the color map to grayscale  

a=1, b=2, c=3 : showing the result  
a=1; b=2; c=3 : not showing the result  

## control statemants

for i=1:10,  
  v(i) = 2 ^ i;  
end;  
-> 2 4 8 ...  

indices=1:10;  
for i=indices,  
  disp(i);  
end;
-> 1 2 3 4 ...

while i <= 5,  
  v(i) = 100;  
  i = i + 1;  
end;    
-> v = 100 100 100 100 100 100 64 128 256 512 1024

i=1;  
while true,  
  v(i) = 999;  
  i = i + 1;  
  if i == 6,  
    break;  
  end;  
end;  
-> 999 999 999 999 999 64 ...

v(1) = 2;  
if v(1) == 1,  
\ disp('The valus is one');  
elseif v(1) == 2,  
\ disp('The value is two');  
else  
\ disp('The value is not one or two');  
end;  
-> The value is two

------

% defined in .m file  
function y = squareThisNumber(x)   
y = x^2  

squareThisNumber(5)->25

addpath(~~) : octave search path

function [y1,y2] = squreAndCubeThisNumber(x)  
y1 = x^2;  
y2 = x^3;  
[a, b] = squareAndCubeThisNumber(5);
a -> 25  
b -> 125

%cost function  
function J = costFunctionJ(X, y, theta)

% X is the "design matrix" containing our training examples  
% Y is the class labels
m = size(X,1); : number of training examples  
predictions = X * theta; : predictions of hypothesis on all m examples  
sqrErrors = (predictions-y).^2
J = sum(sqrErrors) / (2*m);

X = [1 1; 1 2; 1 3]  
y = [1; 2; 3]  
theta = [0; 1];  
j = costFunctionJ(X, y, theta) -> 0
