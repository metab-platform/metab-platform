const a=[.49,.23,.34,.19,.18,.54,.01,.12,.36,.27,.13,0,.78,.01,.05,.41,.45,.16,.02,.41,.03,.5,.85,.06,.03,.06,.02,.47,.72,.11,.63,.02,.15,.69,.88,.51,.03,.01,.45,.93,.55,.1,.45,.13,.88,.1,.42,.25,.26,.89,.05,.87,.96,.02,.1,.03,.59,.96,.04,.24,.92,.65,.04,.08,.41,.41,.1,.04,.44,.52,.03,.25,.86,.75,.09,.37,.08,.69,.14,.47,.62,.29,.41,.15,0,0,.07,.57,.06,.02,.18,.43,.15,.22,0,.01,.85,.23,0,.69,.45,.22,0,.33,.41,.72,.3,.33,.15,.93,.02,.38,.42,.19,0,.23,.34,.88,.51,.02,.01,.82,.07,.91,.39,.56,.52,.21,.89,.01,.9,.07,.83,.76,0,.67,.79,.27,.54,.98,.15,.71,.07,.03,.75,.09,.38,0,.42,.44,.23,.09,.53,.32,.37,.24,.22,.2,.35,.04,.8,.54,0,.04,.09,.76,.03,.4,.29,.04,.69,.87,.83,.57,.41,.97,.27,.95,.62,.49,.51,.08,.95,.34,.81,.88,.12,.31,.17,0,.02,.24,.05,.08,.13,.21,.77,.63,.17,0,.01,.22,.01,.17,.56,.29,.53,.34,.89,.01,.23,.02,0,.02,.89,.31,.05,.03,.78,.95,.8,.11,.41,.19,.87,.01,.68,.48,0,.59,.58,.34,.16,.79,.65,.93,.04,.03,.01,.83,.72,.03,.97,.45,.08,.12,.03,0,.33,.96,.87,0,.07,.04,.3,.21,.44,.18,.76,.37,.04,.03,.26,.13,.09,.16,.32,.12,.87,.21,0,.47,.02,.37,.05,.01,.7,.43,.25,.55,.89,.89,0,.1,.06,.23,.49,.01,.01,0,.66,.98,.24,.39,.32,.42,.08,.01,0,.73,.04,.24,0,.46,0,.24,.62,.28,.08,.06,.03,.19,.08,.45,.02,.95,.81,.02,.46,.19,.12,0,.04,.13,.63,.14,.31,.17,.44,.47,.29,.38,0,.08,.33,.06,.85,.56,.03,.25,.37,.97,.01,.1,.01,.56,.55,.68,.55,.52,.19,.92,.92,.05,.43,0,.95,.09,.95,.2,.04,0,.05,.78,.02,.15,.58,.02,.89,.03,.73,.97,.28,.78,.93,0,.59,.07,.27,.86,.18,.01,.29,0,.8,.1,.5,0,.86,.91,.55,.81,.38,.09,.13,.3,.36,.08,.2,.65,0,.02,.59,.15,.83,.07,.06,.9,.37,.8,.55,.91,.04,.66,0,.67,.26,.93,.81,.33,.27,.08,.92,.3,.05,.02,.11,.32,.68,.02,.71,.12,.01,.32,.95,.04,.26,.15,.1,.48,.72,.08,.08,.19,.19,.75,.1,.36,.08,.4,.01,.12,.16,0,.07,.35,.48,.04,.77,.01,.1,.62,.99,.93,.3,.05,.74,.24,.08,.02,.27,.04,.13,.06,.84,.15,.05,0,.33,.06,.19,.05,.62,.1,.17,.8,.72,.64,.89,.76,.07,0,.38,.3,.21,.03,.77,.05,.62,.01,.4,.36,.98,.28,.25,.83,.03,.44,.42,.81,.24,.42,.09,.32,.04,.24,.83,.79,.73,.07,.11,.36,0,.45,.61,.72,.35,.94,.21,.58,.8,.83,.42,.71,.23,.99,.14,.56,.27,0,.49,.05,.42,.21,.46,0,.86,.31,.95,.75,.8,.02,.17,.46,.03,.34,.48,.78,.66,.66,.1,.48,.91,.15,.44,.32,.7,.02,1,.13,.96,.32,.04,.68,.21,.19,.99,.01,.53,.04,.53,.66,.23,.8,.85,.04,.09,.46,.76,.02,.51,.18,.83,.87,.38,.22,.08,.29,.51,.28,.78,.04,.4,.98,.41,.23,.02,.37,.01,.42,.56,.02,.04,.33,.39,.7,.3,.36,.58,.77,.08,.58,.12,.58,.03,0,0,.33,.4,.28,.24,.26,.89,.85,.19,.45,.26,.84,.09,.01,0,.37,.22,.37,.27,.4,.43,.14,.28,.82,.74,.26,.74,.14,.07,.07,.08,.31,.1,.25,.31,.96,.08,.29,.97,.15,.01,.02,.03,.02,.04,.47,.56,.5,0,.02,.29,.13,0,.03,0,.1,.86,.19,.88,.01,.41,.09,.15,.72,.03,.11,.07,.32,.41,.19,.43,.05,.87,.23,.24,.12,.13,.24,.99,.32,.33,.23,.16,.39,.04,.53,.62,.79,0,.98,.24,0,.68,.77,.21,.72,.02,.37,.16,.11,0,.14,.75,.94,.42,.02,.61,.64,.13,.69,.02,.35,.28,.54,.1,.86,.57,.31,.66,.37,.02,.05,.05,.09,.75,.44,0,.65,.03,.21,.59,.36,.99,.05,.28,.67,.13,.51,.7,.03,.34,.45,.46,.09,.04,.28,.14,.36,.81,.31,.57,.04,.2,.44,.63,0,.23,.12,.76,.88,.32,.9,.06,.02,.27,0,.84,.06,.08,.49,.13,.09,.61,.43,.13,.37,.11,.37,.01,.96,.03,.54,.41,.95,.15,.42,.97,.16,.5,.96,.26,.62,.63,.15,.83,.7,.25,.6,.7,.02,.46,.94,.82,.45,.3,.01,.9,0,.06,0,.03,.8,.69,.43,.59,.23,.62,.5,.35,.19,.26,.89,.02,.25,.25,.94,.08,.8,.51,.76,.32,.05,.26,.19,.17,.05,.42,.22,.05,.15,.51,.51,.69,.64,.32,.97,.29,.77,.2,.14,.95,.15,.81,.87,.1,.1,.56,.23,.04,.06,.47,.67,.38,.22,.17,.25,.49,.76,.24,.01,.79,.62,.21,.02,.94,.31,.03,.03,.9,.13,.96,.31,.4,.73,.76,.32,.54,.08,.99,.97,.58,.53,.9,0,.11,.95,.45,.68,.23,.27,.72,.1,.35,.15,.3,.44,.74,.31,.7,.7,.65,.23,.79,.12,.52,.07,.44,.11,.48,.13,.05,.18,.09,.14,.55,.62,.01,.18,.5,.06,.11,.03,.28,.17,.17,.38,.38,.8,.85,.54,.03,.96,.8,.14,.05,.13,.09,.03,.23,.01,.75,.1,.74,.5,.05,.77,.32,.08,.43,.58,.03,.48,.99,.92,.06,.97,.83,.48,.33,.88,0,0,0,.39,.02,.96,.82,.23,.74,.93,.67,.47,.44,.24,.2,.1,.73,.76,.82,.43,.04,0,.03,.08,.11,.03,.23,.03,0,.29,.09,0,.67,.74,.67,.51,.24,.02,.66,.73,.04,.77,.8,.06,.73,.12,.51,.56,.56,.72,.24,.75,.09,.58,.62,0,0,.94,.31,.45,.21,.47,.2,.09,.51,1,.03,.01,.7,.69,.31,.02,.92,.98,.88,.71,.93,.29,.08,.08,.07,.05,.29,.08,.82,.03,.28,.01,.67,.8,.3,.25,.53,.08,.27,.01,.27,0,.54,.11,.26,.03,.08,.44,.7,.13,.66,.01,.47,.15,.24,.85,.84,.53,.44,.46,.74,.85,.2,.69,0,.01,.58,.05,.01,.05,.58,0,.18,.9,.04,.11,.09,.45,.92,.67,.07,.78,.11,.22,.09,.55,.73,.57,.04,.39,.01,.75,.24,.64,.04,.98,.81,.01,.72,.21,.82,.2,.8,.34,.5,.27,.95,.98,.01,.13,.84,.68,.43,.17,.07,.16,.25,.24,1,.65,.02,.14,.94,0,.01,.63,.01,.4,.1,.07,.95,.86,.26,.63,.08,.02,.75,.66,.53,.74,.56,.2,.19,.74,.01,.19,.38,.09,.8,.82,.28,.25,.01,.42,.15,.79,.93,.48,.46,.76,.38,.73,.86,.14,.34,.18,.37,.47,.22,.1,.72,.54,.98,.46,0,.68,.33,.26,.9,.67,.06,.35,.17,.01,.12,.33,.42,.77,.06,.06,.2,.12,.64,0,.4,.55,.18,.79,.11,.82,.77,.19,.51,.13,.53,.33,.59,.69,.75,.21,.15,.52,.29,.78,.03,.61,.15,.98,.04,.53,.27,.62,1,.4,.57,.05,.55,.07,.22,1,.03,.79,.71,.99,.26,.21,.08,.54,.67,.16,.23,.18,.12,.56,.41,.7,.01,.19,.07,.48,.08,.13,.09,.07,.75,.16,.03,.06,.6,.41,0,.66,.03,.26,.85,.57,.13,.87,.56,.08,.25,.89,.67,.03,.35,.24,.86,.37,.55,.41,.11,.82,.31,.63,.6,.54,.68,.3,.07,.35,.58,.03,.29,.56,.07,.56,0,.34,.39,.88,.64,.52,.98,.82,.57,.75,.03,.69,.22,.14,.46,.61,.67,.73,.1,.97,.38,.55,.75,.68,.59,.01,.56,.48,.74,.21,.57,.84,.02,.94,.82,.49,.31,.3,.43,.18,.57,.39,.44,.66,.93,.53,.02,1,.2,.33,.12,.52,.65,.43,.01,.21,.91,.01,.11,.83,.96,.03,.71,.38,.09,0,.2,.01,.77,.62,.81,.04,.27,.8,0,.49,.18,.36,.13,.86,.39,.02,.02,.16,.2,.81,.08,.04,.11,.31,.24,.54,.87,.02,.71,.04,.35,.73,.16,.13,.95,.69,.24,.97,.13,.01,.02,.06,.82,.3,.38,.82,.68,.35,1,.78,.49,.34,.33,.53,.35,.09,.27,.9,.47,.65,.31,.86,.64,.83,.34,.63,.07,.4,.46,.51,.21,.47,.19,.7,.37,1,.36,.24,.38,.48,.18,.51,.59,.29,.36,.19,.69,.11,.02,.56,0,.76,.03,.2,.12,.29,.01,.18,.02,.47,.23,.56,.2,.67,.97,.06,.23,.52,.19,.71,.36,.67,.27,.95,.76,.52,.2,.66,.86,.51,.34,.18,.7,.5,.1,.35,.34,.7,.35,.39,.97,.09,.42,.94,.13,.76,.14,.16,.32,.17,.48,.51,.31,.01,.65,0,.88,.61,.31,.09,.45,.63,.72,.27,.05,.78,.68,.54,.04,.24,.63,.03,.94,.45,.7,.05,.99,.18,.98,.55,.27,.02,.82,.08,.55,.04,.13,.35,.99,.6,.04,.56,.15,.29,.01,.06,.24,.21,.86,.71,.04,.16,.42,.88,.37,.03,.18,.93,.88,.06,0,.08,.9,.22,.74,.33,0,.03,.34,.46,.1,.89,.73,.31,.06,.28,.1,.6,.34,.12,.27,.5,.03,.37,.17,.51,.13,.06,.16,.11,.59,.83,.01,.76,.83,.27,.3,.09,.08,.04,.12,.68,.37,.3,.47,.61,.17,.06,.25,.54,.78,.04,.59,.52,.4,.5,.99,.31,.26,.72,.25,.86,.33,.69,.41,.36,.21,.06,.35,.01,.56,.32,.63,.19,.37,.44,.17,.15,.14,.06,.03,.99,.22,.02,.36,.85,.2,.09,.01,.15,.11,.25,.28,.79,.2,.33,.38,.89,.93,.85,.13,.2,.29,.59,.82,.01,.66,.42,.06,.63,.25,0,.02,.92,.14,.64,.51,.14,.71,.67,.03,.54,.64,.23,.14,.19,.68,.02,.86,.24,.11,.32,.84,.89,.65,.47,.27,.03,.87,.03,.77,.06,.6,.39,.04,.62,.05,.94,.09,.88,.76,.03,.94,.47,.74,.1,.89,.02,.13,.57,.6,.91,.69,.59,.38,.32,.19,.09,.52,0,.43,.25,.96,.33,.11,.49,.03,.19,.52,.07,.88,.28,.1,0,.23,.25,.09,.71,.2,.65,.04,.61,.46,.02,.08,.07,.09,.5,.18,.03,.69,.65,1,.04,.93,.39,.1,.39,.58,.58,.03,.52,.45,.29,.48,.03,.51,.2,.03,.18,.28,.4,.64,.09,.18,.23,.78,.12,.75,.06,.86,.66,.28,.07,.16,.07,.01,.72,.25,.35,.37,.52,.04,.86,.23,.74,.93,.08,.04,.81,.81,.93,.51,.89,.02,.37,.06,.22,.02,.91,.31,.89,.93,.44,.59,.78,.14,.14,.29,.08,.23,.11,.19,.83,.23,.54,.17,.57,.96,.48,.44,.41,.07,.1,.67,.39,.14,.33,.92,.54,.06,.03,.74,.81,.76,.18,.91,0,.6,.02,.48,.76,.17,.2,.65,.4,.07,.18,.36,.17,.8,.32,.84,.05,.79,.09,.22,0,.25,.17,.14,.63,.45,.24,.57,.65,.02,.05,.66,.74,.23,.2,.02,.11,.19,.16,.85,.79,.08,.03,.56,.38,.67,.03,.02,.07,.89,.12,.03,.11,.21,.15,.11,.96,.57,.34,.6,.29,.01,.08,.06,.1,.2,.76,0,.84,.99,.11,.4,.44,.17,.01,.03,.12,.88,.6,.32,.15,.11,.33,.77,.04,.01,.25,.16,.85,.07,.21,.06,.91,.16,.48,.71,.54,.18,.62,.51,.04,.24,.03,.05,.02,.94,.03,.89,.5,.07,.02,.07,.04,.07,.12,.61,.58,.02,.98,.22,.03,.87,.25,.29,.22,.58,.5,.13,.14,.5,0,.86,.93,.1,.23,.62,.11,.07,.16,.96,.63,.59,.78,.84,.1,.17,.33,.04,.92,.5,.53];export{a as pvalData};
