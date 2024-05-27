type F = (x: number) => number;

function compose(functions: F[]): F {
    
    return function(x: number): number {
        return functions.reduceRight((acc, func) => func(acc), x)
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */