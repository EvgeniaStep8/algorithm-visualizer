const info = {
  bubble:
    "Сортировка пузырьком или сортировка простыми обменами – один из простейших алгоритмов сортировки. Он применяется для упорядочивания массивов небольших размеров.Суть алгоритма в том, что совершается несколько проходов по массиву. При каждом проходе попарно сравниваются два соседних элемента. Если они находятся в верном порядке, то ничего не происходит, в противном случае они меняются местами. В результате первого прохода максимальный элемент окажется в конце, то есть всплывет словно пузырек. Затем все повторяется до того момента пока весь массив не будет отсортирован.",
    comb: "Сортировка расчёской — улучшение сортировки пузырьком. Её идея состоит в том, чтобы «устранить» элементы с небольшими значения в конце массива, которые замедляют работу алгоритма. Если при пузырьковой сортировке при переборе массива сравниваются соседние элементы, то при «расчёсывании» сначала берётся достаточно большое расстояние между сравниваемыми значениями, а потом оно сужается вплоть до минимального.Первоначальный разрыв нужно выбирать не случайным образом, а с учётом специальной величины — фактора уменьшения, оптимальное значение которого равно 1,247. Сначала расстояние между элементами будет равняться размеру массива, поделённому на 1,247; на каждом последующем шаге расстояние будет снова делиться на фактор уменьшения — и так до окончания работы алгоритма.",
  selection:
    "Сортировка выбором - здесь, чтобы отсортировать массив, находим элемент с минимальным значением, затем сравниваем его со значением первой неотсортированной позиции. Если этот элемент меньше, то он становится новым минимумом и их позиции меняются.",
  insertion:
    "Сортировка вставками - сортировка, в которой элементы просматриваются по одному и ставятся на место в соответствии с уже упорядоченным массивом.",
  quick:
    "Быстрая сортировка - в целом это один из самых быстрых алгоритмов сортировки массивов, однако на практике он чаще всего применяется с разного рода модификациями. Является примером принципа «разделяй и властвуй». Идея алгоритма заключается в том, что выбирается опорный элемент, относительно которого будет происходит сортировка. Равные и бОльшие элементы помещаются справа, меньшие – слева. Затем к полученным подмассивам рекурсивно применяются два первых пункта.",
};

const baseDelayTime = 300;

const initialArray = [29, 62, 12, 14, 34, 1, 53, 90, 31, 8, 38, 68, 89, 33, 32, 69, 69, 75, 36, 29, 23, 68, 62, 94, 21, 38, 70, 35, 8, 15, 90, 6, 37, 16, 42, 89, 17, 50, 98, 31, 5, 10, 44, 28, 39, 94, 14, 2, 28, 37, 54, 97, 56, 35, 32, 81, 20, 89, 18, 86, 78, 34, 100, 88, 25, 2, 38, 14, 86, 95, 32, 45, 7, 78, 84, 44, 18, 52, 24, 55, 39, 6, 42, 74, 65, 77, 39, 91, 71, 17, 83, 1, 18, 94, 21, 41, 75, 15, 42, 18, 24, 81, 2, 31, 89, 38, 100, 5, 65, 14, 28, 78, 20, 62, 17, 94, 56, 7, 90, 31, 8, 38, 83, 18, 68, 6, 69, 86, 55, 52, 35, 18, 34, 77, 44, 37, 34, 39, 2, 33, 78, 95, 21, 70, 29, 32, 14, 54, 37, 10, 16, 94, 86, 18, 38, 71, 32, 44, 15, 18, 21, 74, 41, 42, 23, 14, 94, 1, 25, 84, 17, 32, 69, 35, 45, 62, 39, 1, 15, 90, 29, 28, 36, 75, 98, 6, 91, 53, 89, 89, 8, 75, 12, 97, 42, 68, 88, 39, 50, 42, 98, 94, 32, 69, 74, 42, 29, 89, 52, 36, 1, 2, 15, 71, 65, 44, 78, 39, 15, 88, 54, 62, 77, 53, 18, 95, 16, 29, 70, 35, 25, 2, 6, 78, 81, 32, 90, 86, 38, 42, 94, 90, 89, 38, 41, 31, 55, 100, 68, 23, 14, 89, 37, 39, 69, 21, 14, 17, 14, 84, 7, 28, 34, 12, 50, 86, 18, 62, 94, 97, 83, 18, 21, 18, 6, 44, 56, 75, 42, 8, 68, 37, 5, 38, 28, 39, 35, 33, 1, 24, 32, 8, 17, 91, 45, 10, 75, 20, 31, 34, ];

export { info, baseDelayTime, initialArray, };
