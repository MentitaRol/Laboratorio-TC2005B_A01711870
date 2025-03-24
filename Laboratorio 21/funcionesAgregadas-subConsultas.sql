-- La suma de las cantidades e importe total de todas las entregas realizadas durante el 97.
SELECT SUM(M.Precio * E.Cantidad) AS 'Importe Total', SUM(E.Cantidad) AS 'Total Cantidad'
FROM Materiales M, Entregan E 
WHERE M.clave = E.clave 
AND E.fecha BETWEEN '1/1/1997' AND '12/31/1997'

-- Para cada proveedor, obtener la razón social del proveedor, número de entregas e importe total de las entregas realizadas.

SELECT P.RazonSocial, 
COUNT(E.clave) AS 'Numero de entregas', 
SUM(M.precio * E.cantidad) AS 'Importe total'
FROM proveedores P, entregan E, materiales M
WHERE M.clave = E.clave
AND P.rfc = E.rfc
GROUP BY (P.razonsocial)

/* Por cada material obtener la clave y descripción del material, la cantidad total entregada, la mínima cantidad entregada, 
   la máxima cantidad entregada, el importe total de las entregas de aquellos materiales en los que la cantidad promedio entregada sea mayor a 400. */

SELECT M.clave, M.descripcion, 
SUM(E.cantidad) AS 'Cantidad total entregada',
MIN(E.cantidad) AS 'Cantidad minima entregada',
MAX(E.cantidad) AS 'Cantidad maxima entregada',
SUM(M.Precio * E.Cantidad) AS 'Importe Total'
FROM materiales M, entregan E
WHERE M.clave = E.clave 
GROUP BY (M.clave)
HAVING AVG(E.cantidad) > 400

/*Para cada proveedor, indicar su razón social y mostrar la cantidad promedio de cada material entregado, 
detallando la clave y descripción del material, excluyendo aquellos proveedores para los que la cantidad promedio sea menor a 500.*/

SELECT P.razonsocial, M.clave, M.descripcion,  
AVG(E.cantidad) AS 'cantidad promedio de cada material entregado'
FROM proveedores P, materiales M, entregan E
WHERE M.clave = E.clave
AND P.rfc = E.rfc
GROUP BY(P.razonsocial)
HAVING AVG(E.cantidad) < 500

/* Mostrar en una solo consulta los mismos datos que en la consulta anterior pero para dos grupos de proveedores: 
aquellos para los que la cantidad promedio entregada es menor a 370 y aquellos para los que la cantidad promedio entregada sea mayor a 450. */

SELECT P.razonsocial, M.clave, M.descripcion,  
AVG(E.cantidad) AS 'cantidad promedio de cada material entregado',
CASE
	WHEN AVG(E.cantidad) < 370 THEN 'Menor a 370'
    WHEN AVG(E.cantidad) > 450 THEN 'Mayor a 450'
END AS 'Cantidad promedio entregada'
FROM proveedores P, materiales M, entregan E
WHERE M.clave = E.clave
AND P.rfc = E.rfc
GROUP BY(P.razonsocial)
HAVING AVG(E.cantidad) < 370 OR AVG(E.cantidad) > 450

-- Clave y descripción de los materiales que nunca han sido entregados.

SELECT clave, descripcion 
FROM materiales
WHERE clave NOT IN (SELECT clave FROM entregan)

-- Razón social de los proveedores que han realizado entregas tanto al proyecto 'Vamos México' como al proyecto 'Querétaro Limpio'.

SELECT razonsocial
FROM proveedores
WHERE rfc 
IN (SELECT rfc FROM entregan WHERE numero 
IN (SELECT numero FROM proyectos WHERE denominacion = 'Vamos Mexico'))
AND rfc 
IN (SELECT rfc FROM entregan WHERE numero 
IN (SELECT numero FROM proyectos WHERE denominacion = 'Queretaro Limpio'))

-- Descripción de los materiales que nunca han sido entregados al proyecto 'CIT Yucatán'.

SELECT clave, descripcion 
FROM materiales
WHERE clave 
NOT IN (SELECT clave FROM entregan 
        WHERE numero = (SELECT numero FROM proyectos WHERE denominacion = 'CIT Yucatán'))

/* Razón social y promedio de cantidad entregada de los proveedores cuyo 
   promedio de cantidad entregada es mayor al promedio de la cantidad entregada por el proveedor con el RFC 'VAGO780901'. */

SELECT P.razonsocial, AVG(E.cantidad) 'Promedio Cantidad Entregada' 
FROM proveedores P, entregan E 
WHERE P.rfc = E.rfc
GROUP BY P.razonsocial
HAVING AVG(E.cantidad) > (
    SELECT AVG(cantidad) 
    FROM entregan 
    WHERE  rfc = 'VAGO780901'
);

/* RFC, razón social de los proveedores que participaron en el proyecto 'Infonavit Durango' y cuyas cantidades 
totales entregadas en el 2000 fueron mayores a las cantidades totales entregadas en el 2001. */

SELECT P.RFC, P.RazonSocial
FROM proveedores P, entregan E
WHERE P.RFC = E.RFC
AND E.Numero = (
    SELECT Numero 
    FROM Proyectos 
    WHERE Denominacion = 'Infonavit Durango'
)
GROUP BY P.RFC, P.RazonSocial
HAVING 
    SUM(CASE WHEN YEAR(E.Fecha) = 2000 THEN E.Cantidad ELSE 0 END) > 
    SUM(CASE WHEN YEAR(E.Fecha) = 2001 THEN E.Cantidad ELSE 0 END); 
