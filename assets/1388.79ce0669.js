const a=[.67,.56,.15,.25,.48,.71,.5,.92,.46,.34,.88,.97,.51,.83,.71,.04,.73,.28,.91,.05,.57,.85,.63,.92,.23,.76,.94,.22,.18,.69,.66,.78,.64,.41,.87,.93,.82,.5,.16,.21,.96,.87,.04,.35,.98,.66,0,.76,.47,.96,.16,.31,.71,.91,.19,.69,.4,.18,.62,.88,.7,.97,.75,.76,.81,.93,.87,.28,.61,.01,.14,.56,.79,.57,1,.56,.04,.76,.65,.55,.07,.83,0,.63,.3,.89,.63,.56,.8,.3,.59,.18,.9,.85,.88,.64,.51,.66,.62,.52,.01,.96,.53,.2,.39,.28,.65,.69,.83,1,.4,.63,.99,.17,.93,.75,.99,.68,.91,.25,.16,.6,.47,.78,.04,.51,.6,.82,.76,.76,.64,.88,0,.73,.56,.58,.45,.51,.71,.34,.71,.33,.78,.62,.34,.51,.64,.16,.87,.16,.88,.53,.55,.88,.92,.8,.25,.57,.6,.81,.2,.58,.74,.43,.86,.68,.57,.81,.54,.96,.31,.65,.63,.9,.18,.83,.56,.71,.67,.51,.28,.65,.56,.35,.66,.18,.66,.75,.42,.53,.34,.8,.99,.57,.57,.5,.41,.89,.05,.59,.07,.52,.87,.37,.62,.22,.06,.78,.47,.95,.99,.24,.79,.22,.16,.63,.79,.87,.75,.18,.39,.25,.96,.56,.67,.83,.91,.72,.45,.1,.34,.73,.1,.14,.87,.32,.56,.27,.09,.75,.43,.31,.82,.96,.89,.34,.59,.72,.94,.42,.12,.76,.35,.27,.79,.7,.22,.65,.99,.34,.11,.78,.79,.74,.68,.28,.88,.69,.99,.86,.86,.18,.71,.19,.52,.89,.75,.89,.37,.46,.42,.28,.66,.43,.97,.92,.18,.99,.51,.7,.23,.86,.65,.42,.69,.03,.92,.58,.94,.38,.14,.56,.74,0,.64,.38,.51,.63,.88,.65,.89,.73,.14,.35,.7,.24,.69,.77,.09,.89,.72,.64,.29,.78,.72,.76,.4,.8,.16,.91,.73,.48,.41,.72,.49,.84,.75,.56,.64,.92,.86,.03,.63,.56,.51,.41,.8,.71,.02,.52,.56,.73,.23,.95,.26,.64,.25,.3,.39,.46,.21,.31,.27,.68,.03,.97,.27,.91,.65,.68,.59,.43,.64,.67,.67,.55,.5,.54,.19,.97,.24,.4,.84,.74,.05,.48,.27,.2,.92,.68,.45,.75,.15,.4,.51,.33,.38,.44,.91,.04,.39,1,.24,.71,.89,.49,.32,.21,1,.73,.13,.14,.6,.42,.64,.64,.94,.1,.46,.11,.28,.51,.89,.95,.54,.98,.54,.72,.87,.46,.52,.85,.24,.33,.33,.95,.82,.39,.61,.43,.51,.3,.7,.83,.76,.84,.25,.48,.4,.67,.38,.79,.72,.6,.36,.61,.66,.74,.58,.21,.34,.13,1,.76,.14,.84,.49,.6,.89,.73,.6,.64,.6,.74,.61,.47,.32,.38,.64,.41,.1,.38,.49,.79,.9,.42,.18,.72,.56,.09,.56,.63,.46,.27,.16,.89,.65,0,.96,.53,.56,.46,.73,.25,.76,.57,.15,.61,.32,.8,.7,.76,.77,.4,.53,.96,.25,.99,.67,.92,.06,.19,.21,0,.87,.25,.99,.58,.69,.24,.77,.71,.1,.83,.52,.24,.22,.99,.66,.66,.75,.57,.75,.63,.76,.82,.2,.69,.43,.81,.21,.82,.27,.22,.65,.13,.51,.37,.85,.97,.75,.87,.44,.53,0,0,.21,.53,.62,.39,.21,.21,.79,.75,.83,.27,.98,.55,.96,.93,.78,.3,.49,.62,.65,.34,.47,.78,.36,.76,0,.15,.54,.2,.86,.31,.47,.27,.44,.31,.73,.99,.25,.53,.14,.99,.72,.53,.33,.77,.61,.51,.09,.88,.86,.98,.33,.39,.09,.62,.82,.85,.36,.39,.84,.86,.11,.77,.61,.29,.65,.22,.81,.65,.59,.16,.36,.85,.69,.33,.59,.78,.84,.15,.59,1,.95,.92,.66,.54,.41,.64,.51,.37,.43,.48,.39,.8,.82,0,.28,.04,.91,.75,.63,.02,.02,.82,.47,.97,.59,.78,.96,.76,.78,.67,.49,.96,.11,.05,.4,.98,.16,.28,.69,.71,.67,.74,.84,.87,.44,.69,.93,.35,.19,.8,.46,.33,.22,.97,.72,.85,.64,.48,.78,.09,.57,.22,.35,.58,.89,.52,.6,.87,.42,.97,.62,.06,.14,.75,.82,.58,.78,.91,.99,.36,.41,.73,.93,.31,.74,.65,.75,.04,.77,.49,.9,.92,.42,.76,.39,.34,.83,.57,0,.68,.53,.73,1,.15,.81,.67,.1,.48,.91,.26,.74,.54,.42,.76,.46,.41,.59,.98,.61,.57,.89,.93,.54,.84,.73,.88,.9,.1,.67,.8,.72,.65,.71,.9,.16,.84,.85,.84,.13,.25,.57,.82,.45,.53,.85,.6,.08,.33,.54,.81,.64,.5,.15,.57,.17,.78,.33,.55,.99,.74,.35,.2,.51,.52,.6,.94,.7,.72,.38,.98,.4,.36,.36,.51,.87,.59,.45,.41,.25,.85,.87,.16,.65,.76,.56,.82,.72,.18,.67,.41,.9,.48,.61,.56,.11,.94,.21,.7,.82,.66,.46,.79,1,.09,0,.91,.59,.59,.04,.51,.85,.98,.95,.93,.74,.57,.7,.75,.76,.47,.15,.9,.51,.51,.18,.71,.22,.77,.53,.95,.44,.58,.67,.16,.53,.19,.87,1,.49,0,.67,.44,.38,.46,.86,.49,.85,.69,.56,.75,.58,.38,.22,.56,.81,.24,.7,.97,.27,.6,.54,.56,.96,.25,.29,.59,.37,.02,.58,.8,.56,.76,.99,.85,.44,.82,.82,.54,.36,.27,.62,.22,.96,.89,.9,.25,.99,.95,.67,.47,.94,.98,.75,.88,.24,.98,.46,.35,.91,.18,.57,.75,.72,.46,.69,.14,.49,.53,.52,0,.83,.15,.93,.45,.66,.59,.37,.64,.8,.15,.21,.76,.27,.73,.29,.59,.87,.59,.81,.3,.92,.34,.94,.5,.72,.69,.53,.7,.7,.4,.68,.82,.63,.54,.29,.37,.85,.37,0,.62,.72,.84,.11,.59,.23,.89,.88,.81,.38,0,.64,.15,.66,.75,.91,.31,.33,.44,.92,.76,.96,.25,.77,.77,.98,.1,.1,.37,.94,.57,.52,.08,.15,.21,.73,.63,.01,.89,.19,.86,.55,.41,0,.04,.97,.39,.27,.52,.56,.8,.25,.09,.02,.28,.43,.7,.73,.12,.12,.24,.86,.8,.3,.77,.34,.46,.63,.27,.78,.48,.95,.17,.14,.15,.49,.43,.33,.39,.54,.72,.75,.62,.21,.97,.83,.74,.63,.22,.57,.87,0,.87,.69,.57,.56,.64,.28,.51,.14,.54,.47,.67,.27,.32,.61,.24,.73,.25,.16,.61,.54,.01,.07,.21,.96,.63,.69,.35,.64,.83,.8,.27,.93,.82,.62,.66,.3,.71,.5,.78,.26,.18,.84,.25,.7,.64,.32,.85,.53,.44,.6,.4,.47,.7,.91,.65,.33,.1,.7,.27,.94,.31,.06,.09,.18,.58,.36,.2,0,.94,.31,.82,.29,.31,.35,.22,.52,.68,.99,.55,.65,.38,.55,.96,.72,.56,.25,.86,.52,.75,.74,.69,.08,0,.34,.52,.64,.72,.14,.21,.69,.77,.36,.22,.65,.76,.73,.11,.57,.48,.77,.2,.74,.96,.8,.32,.62,.83,.94,.8,.63,.18,.44,.91,.13,.64,.67,.8,.69,.76,.66,.98,.39,.59,.5,.71,.42,.33,.33,.47,.71,.41,.91,.78,.69,.69,.42,.81,.45,.6,.64,.44,.95,.28,.99,.45,.25,.26,.42,.03,.24,.13,.46,.81,.84,.9,.45,.57,.85,.36,.45,.56,.38,.17,.93,.17,.36,.41,.54,.69,.87,.56,.63,.76,.77,.54,.91,.94,.09,.62,.04,.94,.32,.45,.59,.93,.96,.45,.63,.3,.34,.02,.11,.19,.91,.78,.86,.47,.12,.78,.41,.2,.68,.84,.67,.41,.77,.94,.47,.78,.9,.44,.89,.9,.94,.48,.53,.05,.51,.14,.11,.37,1,.43,.54,.43,.34,.94,.32,.72,.23,.92,.19,.28,0,.29,.49,.32,.99,.72,.73,.46,0,.44,.39,.81,.49,.07,.42,.31,.27,.42,.65,.31,.75,.73,.57,.51,.79,.95,.29,.94,.39,.93,.55,.89,.88,.97,.8,.81,.56,.84,.66,.3,.7,.43,.68,.65,.99,.91,.93,.46,.95,.89,0,.62,.91,.43,.33,.53,.3,0,.5,1,.68,.31,.77,.86,.94,.6,.57,.64,.28,.11,.52,.9,.97,.21,.63,.33,.45,.59,0,.1,.56,.63,.12,.86,.55,.62,.87,.33,.68,.88,.89,.53,.52,.2,.68,0,.53,0,.72,.43,.54,.75,.94,.95,.72,.67,.2,.18,.78,.27,.76,.76,.48,.86,.87,.97,.42,.33,.13,.27,.78,.67,.8,.17,.85,.9,.22,.89,.8,.67,.13,.48,.03,.67,.22,.84,.6,.22,.59,.27,.54,.19,.55,.88,.66,.27,.42,.34,.79,.66,.48,.68,.42,.63,.72,.51,.62,.26,.16,.71,.58,.51,.1,.79,.94,.81,0,.17,.75,.92,.13,.57,.95,.44,.46,.36,.42,.85,1,.57,.12,.91,.02,.73,.83,.79,.76,.71,.51,.16,.45,.77,.7,.53,.49,.6,.98,.28,.38,.99,.96,.83,.91,.15,.34,0,.8,.33,.72,.31,.62,.88,.27,.92,.9,.14,.97,.72,.21,.99,.29,.57,.94,.81,.25,.81,.98,.89,.46,.23,.08,.07,.94,.47,.47,.89,.18,.89,.28,.34,.24,.23,.24,.89,.37,.32,.87,.74,.68,.34,.23,.87,.51,.19,.1,.76,.48,.52,.4,.55,.96,.75,.55,.52,.15,.54,.56,.79,0,.8,.64,.84,.51,.86,.66,.17,0,.88,.52,.98,.4,.17,.64,.19,.54,.93,.95,.88,1,.86,.98,.77,0,.39,.43,.72,.06,.52,0,.47,.29,.04,.77,.67,.68,.04,.93,.69,1,.39,.88,.79,.96,.68,.27,.63,.61,.85,.12,.81,.9,.72,.15,.38,.96,.61,.87,.89,.83,.93,.82,.68,.32,.56,.47,.96,.3,.41,.76,.52,.04,.68,.32,.43,.69,0,.53,0,.15,.91,.99,.95,.57,.87,.52,.74,0,.53,.54,.36,.35,.88,.04,.43,.53,.84,.58,.23,.22,.91,.66,.29,.58,.98,.57,.41,.11,.46,.76,.25,.87,.15,.88,.75,.25,.2,.21,.2,.53,.56,.88,.71,.43,.67,.96,1,.53,.6,.32,0,.6,.36,.8,.25,.44,.29,.45,.36,.86,.41,.36,.23,.23,.05,.45,.17,.18,.67,.4,.18,.43,.81,.91,.93,.82,.59,0,.29,.82,.08,.99,.6,.65,.6,.37,.1,.44,.47,.68,.39,.92,.47,.36,.7,.16,.6,.77,.23,0,.73,.31,.73,.81,.41,.88,.63,.22,.82,.68,.2,.98,.8,.97,.67,.3,.5,.49,.92,.57,.32,.82,.53,.61,.82,.68,.62,.47,.18,.93,.57,.69,.13,.41,.76,.56,.74,.31,.04,.97,.55,.36,.17,.04,.33,.9,.52,.31,.91,.1,.79,.22,.11,.44,.32,.43,.3,.3,.82,.96,.81,.56,.27,.97,.57,.79,.67,.32,.28,.57,.64,.71,.32,.59,.46,.83,.55,.77,.9,.81,.59,.58,.93,.69,.69,.58,.23,.27,.15,.81,.78,.8,.1,.98,.74,.34,.54,.46,.92,.7,.95,.47,.51,.8,.41,.74,.86,1,.71,.36,.83,.97,.2,.63,.45,0,1,.93,.6,.47,.99,.72,.63,.69,.17,.3,.62,.88,.6,.73,.67,.84,.01,.69,.55,.04,.85,.74,.35,0,.04,.79,.19,.79,.88,.87,.22,.89,.96,.35,.34,.91,.07,.94,.37,.62,.31,.09,.57,.79,.32,.74,.44,.29,.94,.21,.55,.84,.31,.47,.79,.2,.51,.7,.86,.78,.82,.36,.75,1,.91,.69,.56,.28,.37,.17,.74,.34,.58,.55,.69,.35,.93,0,.88,.36,.58,.13,.7,.4,.78,.96,.51,.44,0,.66,.77,.88,.98,.18,.68,.74,.28,.41,.24,.56,.91,.62,.37,.8,.72,.43,.31,.38,.7,.95,.59,.58,.52,.98,.44,.28,.67,.92,.68,.85,.56,.87,.86,1,.77,.67,1,.8,.82,.9,.78,.44,.75,.67,.91,.52,.6,.56,.13,.8,.61,.7,.23,.9,.8,.66,.23,.83,.61,.29,.91,.09,.86,.53,.8,.5,.42,.66,.87,.45,.3,.4,.13,.6,.51,0,.41];export{a as pvalData};
