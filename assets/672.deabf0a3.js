const a=[.02,.94,.34,.25,.65,0,.93,.79,.11,.2,.21,.01,.19,.71,.41,.81,.21,.22,.31,.3,.91,.34,.85,.94,.8,.96,.21,.55,.55,.28,.71,.04,.27,.06,.11,.66,.33,.97,.95,.83,.76,.9,.07,.21,.07,.9,.67,0,.1,.07,.72,.12,.75,.82,.38,.99,.96,.13,.42,.86,.73,.42,.69,.63,.09,.05,.61,.49,.02,.34,.8,.1,.74,.44,.66,.4,.87,.67,.81,0,.62,.69,.82,.83,.06,.31,.99,.31,.49,.22,.25,.56,.2,.79,.02,.17,1,.05,.05,.98,.43,.82,.91,.91,.31,.72,.2,.02,.24,.42,.11,.63,.01,.91,0,.95,.28,.07,.12,.71,0,.28,0,.73,.65,.13,.21,.12,.05,.66,.95,.5,.73,.59,.15,.6,.97,0,.03,.07,.57,.24,.61,.98,.06,.24,.29,.16,.88,.84,.83,.92,.25,.53,.73,.18,.59,0,.87,.79,1,.88,.25,.71,.66,.81,.72,.02,.41,.66,.01,.01,.81,.76,.63,.05,.01,.97,.23,.41,.34,.41,.42,.87,.71,.13,.07,0,.53,.63,.27,.79,.95,.6,.65,.1,.93,.18,.03,.02,.61,.88,.73,.48,.17,.11,.54,.22,.56,.04,.76,.57,0,.71,.13,.9,.06,.75,.04,.47,.93,.1,.67,.56,.85,.74,.91,.03,.04,.45,.44,.27,.97,.68,.03,.06,.28,.77,.09,.57,.88,.81,.71,.95,.73,.89,.91,.27,.29,.13,.52,.89,.43,.89,.35,.05,.65,.58,.89,.91,.27,.93,.56,.4,.4,.38,.06,.76,.46,.66,0,.29,.58,.68,.63,.48,.55,.63,.56,.07,.74,.9,.65,.4,.94,.73,.94,.42,.88,.07,.81,.16,.42,.89,.58,.11,.41,.1,.72,.99,.43,.33,.18,.06,.06,.88,.85,.78,.51,.41,.92,.72,.38,.11,.02,.92,.11,.65,.68,.19,.56,.01,.38,.92,.25,.6,.27,.75,.88,.39,.27,.92,.33,.03,.2,.92,.04,.15,.75,.33,.93,.12,.21,.85,.67,.57,.75,.95,.38,.37,.91,.66,.01,.86,.31,.52,.85,.56,.73,.63,.62,.06,.42,.02,.79,.78,.4,.71,.14,.36,.1,0,.06,.3,.15,.44,.88,.96,.68,.77,.63,.67,.96,.86,.16,.91,.1,.96,.23,.3,.83,0,.81,.33,.39,.32,.24,.15,.64,.93,.16,.59,.77,.25,.88,.46,.53,.55,.49,.61,.89,.37,.47,.8,.04,.41,.71,.3,.94,.04,.18,.75,.03,0,.25,.59,.4,.4,.2,.92,.24,.31,.75,.02,.62,.51,.82,.38,.57,.32,.96,.54,.85,.37,.21,.95,.33,.57,.33,.43,.94,.54,.8,.61,.24,.89,.31,.36,.41,.96,.95,.19,.31,.81,.33,.64,.48,.12,.08,.68,.03,.41,0,.24,.97,.33,.4,.43,.11,.85,.73,.5,.38,.56,.14,.77,.8,.9,.02,.71,.9,0,.12,.73,.14,.8,.09,.26,.11,.8,.96,.88,.92,.57,.69,.99,.05,.21,.39,.42,.84,.98,.71,.44,.11,.07,.02,.59,.8,.96,.09,.2,.65,.94,.68,.03,.25,.51,.55,.24,.45,.12,0,.64,.01,.02,.61,.02,.49,.06,.55,.71,.19,.25,.01,.64,.33,.37,.6,.53,.27,.58,.43,.5,.83,.04,.81,.45,.81,.08,.88,.03,.26,.4,.63,.02,.46,.42,.09,.82,.75,.71,.56,.94,.75,.4,.18,.23,.78,.99,.01,0,.52,.87,.52,.38,.42,.98,.05,.4,.08,.73,.05,.89,.38,.38,.97,.9,.24,.63,.1,.88,.33,.07,.22,.69,.68,.06,.01,.45,.36,.21,0,.45,.04,.46,.31,.83,.07,0,.71,.3,.6,.41,.77,0,.3,.85,.85,.93,.11,.51,.14,.75,.27,.45,.19,.57,.73,.77,.46,.63,.21,.18,.45,.46,.73,.61,.36,.42,.02,.46,.88,.24,.32,.23,.84,0,.65,.96,.22,.17,.43,.14,.58,0,.28,.54,.67,.71,.05,0,.52,.4,.29,.91,.79,.94,.2,.61,.37,.78,.33,.57,.93,.1,.77,.6,.63,.78,.99,.01,.56,0,.21,.13,0,.17,.93,.04,.94,.75,.75,.47,.03,.54,.37,.18,.14,.66,.76,.96,.18,.56,.49,.93,.1,.05,.15,.39,.73,.55,.32,.5,.97,.36,.06,.29,.01,.92,.04,.84,.36,.37,.88,.6,.42,.01,.45,.17,.99,.03,.18,.4,.75,.38,.12,.52,.95,.73,0,.24,.3,.53,.91,.29,.53,.09,0,.87,.27,.15,.4,.64,.29,.97,.96,.06,.11,.53,.43,.35,.54,.05,.88,.08,.08,.65,.39,.74,.44,.03,.01,.88,.64,.86,.76,.71,.1,.26,.16,.74,.8,.61,.77,.09,.45,.62,.33,.97,.16,.71,.04,.59,.04,.84,.67,.9,.32,.32,.73,.44,.28,.14,.63,.47,.03,.62,.51,.36,.02,.48,.46,.35,.01,.71,.86,.02,.28,.9,.98,.69,.79,.47,.03,.22,.62,.82,0,.19,.04,.63,.03,.44,.94,.73,.03,.17,.49,.41,.69,.1,.88,.17,.49,.57,.04,.9,.56,0,.84,.57,.99,.44,.41,.67,.21,0,.74,.66,.71,0,.3,.86,.96,.61,.65,.72,.81,.01,.34,.23,0,.87,.68,.9,.46,.78,.21,.97,.96,0,.09,.53,.18,0,.36,.68,.68,.91,.14,.06,.06,.75,.03,.38,.12,.95,.02,.37,.23,.56,.06,.73,.56,.12,0,.74,.58,.76,.61,.93,.33,.66,.33,.53,.01,.46,.89,.52,.61,.34,.74,.98,.8,.07,.58,.11,.19,.64,0,.21,.97,.38,.48,.58,.38,.16,.91,.71,.48,.67,.64,.48,.85,.79,.74,.66,.77,.11,.51,.9,.47,.93,.36,.07,.78,.13,.55,.27,.02,.06,.34,.75,.67,.09,.45,.73,.44,.21,.98,.99,.52,.66,.76,.26,.94,0,0,.91,.21,.99,.53,.74,.05,.8,.73,.91,.63,.64,.47,.49,.02,.1,0,.42,0,.05,.41,0,.3,.75,.55,.9,.77,.85,.84,.48,.4,.63,.45,.92,.43,.63,.54,.62,.74,.62,.03,.4,.33,.07,.31,.97,.5,.67,.38,.6,.16,.2,.58,.31,.09,.04,.2,.89,.01,.38,.21,.42,.05,.34,.06,.81,.55,1,.52,.1,.83,.57,.73,0,.31,.92,.27,.92,.01,.3,.21,.97,.9,.99,.14,.55,.24,.36,.62,.87,.21,.98,.05,.1,.44,.29,.89,.73,.95,.99,.32,.67,.13,.92,.95,.05,.97,.59,.51,.85,.52,.29,.93,.08,.66,.24,.29,.69,.2,.81,.06,.45,.06,.94,.76,.15,.09,.33,.71,.71,.66,.59,.02,.8,0,.46,.47,.89,.58,.89,.28,.55,.27,.38,.62,.07,.23,.57,.64,.59,.02,.77,.66,0,.41,.38,.43,.05,.58,.67,.45,.76,.39,.06,.59,.68,.54,.69,.06,.42,0,.04,.93,.86,.26,.22,.71,.25,.71,.83,.81,.92,.14,0,.84,.53,.36,.57,.6,.63,.23,.32,.87,.46,.08,.46,.33,.04,.6,.56,.73,.7,.6,.76,.44,.97,.5,.04,.44,.96,.79,.59,.02,.33,0,.69,.31,.85,.78,.21,.35,.78,.15,.11,.04,.47,.37,.67,.61,.84,.57,.15,.77,.9,.84,.07,.03,.05,.34,.89,.3,.19,.38,.77,.97,.3,.62,.37,.27,.17,0,.07,.46,.92,.53,.03,.04,.3,.01,.31,.47,0,.83,.99,.53,.08,0,.41,.57,.38,.94,.98,.23,.34,.45,.73,.12,.72,.49,.23,.51,0,.85,.57,.85,.8,.67,.79,.34,.02,.6,.45,.81,0,.84,.25,.39,.05,.33,.91,.6,0,.83,.54,.89,.58,.51,.48,.63,.6,.39,.42,.61,.91,.66,0,.48,.92,.82,.97,.67,.12,.18,.26,.99,.44,.39,.77,.56,.78,.33,.15,.76,.58,.08,.67,.89,.27,.88,.86,.55,1,.9,.27,.99,.8,.35,.54,1,.88,.51,.45,.67,0,.13,.98,.83,.1,.94,.93,.51,.5,.7,.4,.72,.28,0,.83,.18,.75,.51,.45,.41,.91,0,.34,.82,.45,.97,.86,.87,.68,.27,.56,.95,.53,.04,.23,.38,.64,.67,.96,.28,.65,.46,.93,.85,.15,.03,.78,.66,.87,.81,.67,.92,.72,.47,.08,.91,.17,.34,.74,.66,.1,.76,.22,.53,.69,.67,.88,.67,0,.54,.43,.08,.22,.09,.5,.17,.77,.36,.17,.45,.02,.91,.77,.3,.47,.55,.11,.17,.76,.05,.5,.84,.93,.55,.84,.01,.02,.86,.45,.91,.69,.87,.98,.03,.61,.72,.33,.54,.4,.11,.87,.1,.5,.9,.42,.63,.31,.13,.98,.95,.03,.05,.52,.67,.66,.46,.03,.53,.24,.97,.12,.83,.45,.97,.07,.88,.64,.87,.09,.54,.56,.13,.78,.71,.68,.89,.36,.05,.88,.86,.34,.49,.08,.62,.94,.07,.48,.91,.2,.74,.55,.87,.88,.84,.8,.84,.91,.75,.43,.54,.03,.39,.72,.48,.09,.67,.45,.56,.36,.99,.66,.55,.1,.05,.86,.77,.02,.69,.1,.7,.85,.13,.85,.57,.7,.89,.39,.67,.18,.41,.52,.95,.83,.55,.62,.21,.13,.49,.97,.74,.31,.76,.29,.12,.97,.77,.9,.55,.29,.7,.68,.15,.16,.31,.59,.97,.32,.46,.55,.28,.75,.48,.84,.05,.42,.11,.05,.48,.83,.78,.51,.32,.95,.42,.75,.4,.85,.28,.78,.84,.19,.96,.41,.11,.45,.26,.07,.38,.46,.48,.66,1,.36,.9,.23,.16,.5,.24,.54,.65,.39,.07,.04,.33,.18,.33,.68,.21,.89,.37,.86,.04,.5,.3,.08,.37,.11,.09,.29,.42,.26,.84,.15,.41,.49,.11,.96,.99,.96,.88,.77,.54,.71,.69,.83,.28,.36,.5,.77,.24,.75,.08,.39,.4,.35,.23,.82,.81,.24,.15,.33,.34,.46,.37,.78,.81,.76,.43,.28,.82,.6,.81,.93,.54,.04,.82,0,.43,.83,.82,.85,.3,.99,.34,.31,.73,.93,.07,.49,.32,.09,.77,.01,.59,.5,.12,.48,.46,.85,.41,.94,.84,.42,.42,.2,.03,.4,.79,.99,.92,.13,.48,.45,.08,.2,.55,.28,.75,.75,.73,.83,.17,.95,.6,.65,.69,.07,.36,.68,.04,.42,.3,.6,.72,.33,.75,.44,.43,.8,.02,.03,.73,.02,.76,.02,.38,.58,.2,.56,.67,.27,.33,.81,.7,.75,.92,.78,.8,.45,.53,.25,.78,.78,.02,.43,.1,.01,.66,.46,.06,.86,.3,.33,.59,.77,1,.7,.44,.56,.46,.73,.49,.82,.83,.65,.61,.65,.79,.39,.8,.13,.84,.78,.67,.3,.2,.06,.76,.59,.24,.1,.03,.65,.98,.24,.85,.6,.57,.18,.8,.63,.47,.32,.67,.77,.52,.13,.06,.18,.32,.42,.9,.26,.39,.83,.96,.67,.31,.24,.63,.02,.02,.04,.51,.08,.1,.11,.74,.73,.34,.43,.03,.6,.13,.92,.09,.26,.49,.02,.87,.02,.77,.81,.86,.94,.55,.21,.94,.01,.01,.76,.01,.55,.49,.29,.52,.95,.89,.87,.63,.34,.46,.76,.79,.76,.75,.93,.71,.23,.53,.09,.07,.39,.65,.8,.14,.51,.07,.94,.94,.41,.87,.15,.88,.23,.69,.25,.14,.14,.93,.91,.07,.04,.63,.72,.13,.91,.21,.82,.99,.07,.34,.97,.62,.99,.02,.4,0,.03,.9,.96,.01,.28,.88,0,.11,.99,.1,.36,.25,.14,.51,.26,.53,.38,.04,.15,.69,.6,.27,.46,.62,.13,.77,.61,.4,.6,.59,.02,.59,.24,.6,.65,.03,.86,.91,.53,.78,.67,.75,.89,.2,.19,.29,.28,.28,0,.49,.8,.14,.52,.55,.71,.46,.19,.43,.61,.48,.64,.32,.11,.4,.22,.97,.35,.48,.66,.93,.85,.88,.42,.02,.54,.41,.94,.32,.42,.84,.44,.72,.25,.48,.28,.61,.06,.74,.95,.91,.73,.49,.81,.84,.44,.8,.58,.02,.6,.2,.73,.72,.54,.85,.92,.99,.32,.56,.6,.52,.19,.66,.74,.05,.32,.63,.8,.76,.17,.93,.61,.34,.74,.09,.61,.45,.83,.11,.45,.38,.5,.32,.41,.15,.93,.19,.01,.78,.78,.5,.05,.16,.69];export{a as pvalData};
