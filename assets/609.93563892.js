const a=[.01,.5,.02,.45,.11,.18,.14,.89,.21,.21,.25,.14,.05,.06,.09,.31,.02,.74,.01,.37,.61,.91,.02,.16,.64,.39,.93,.71,.8,.83,.66,.64,.11,.01,.37,.19,0,.13,.4,.2,.82,.23,.1,.11,.71,.23,.23,.03,.37,.24,.09,.03,.04,.12,.33,.33,.67,.06,.55,.35,.5,.08,.17,.62,.83,.29,.12,.14,.19,.22,.15,.04,.94,.44,.09,.26,.42,.62,.24,.16,.16,.72,.34,.46,.26,.08,.45,.03,.27,.4,.91,.48,.17,.37,.24,0,.55,.01,.53,.62,.12,.15,.72,.1,.55,.05,.66,.14,.1,.36,.24,.77,.89,.22,.78,.1,.69,.38,.6,.69,.23,.53,0,.16,.52,.49,.07,.56,.36,.05,.14,.49,.13,.78,0,.7,.89,.13,.17,.08,.12,.04,.56,.39,.01,.6,.09,.98,.77,.59,.24,.96,.63,.04,.38,.87,.94,0,.14,.21,.64,.61,.71,.1,.41,.75,.1,.23,.42,.44,0,.28,.92,.44,.76,.5,.39,.79,.83,.12,.47,.12,.64,.13,.86,.06,.13,0,.53,.72,.96,.91,.29,.62,.28,.03,.69,.28,.04,.76,.29,.7,.04,.12,.6,.51,.52,.44,.7,0,.66,.09,.01,.08,.05,.41,.58,.56,.42,.86,.54,.28,.95,.09,.58,.04,.77,.25,.43,.28,.85,.24,.43,.16,.01,.01,.16,.39,.05,.11,.37,.12,.4,.81,1,.85,.35,.89,.16,.59,.69,0,.73,.18,.13,.01,.09,.89,.54,.14,.13,.6,.92,.11,.84,.31,.48,.43,.84,.09,.03,.33,.03,.08,.16,0,.28,.65,.18,.46,.63,.91,.25,.02,.25,.71,.3,.01,.74,.93,.33,.08,.26,.63,.07,.12,.19,.61,.1,.93,.99,.1,.58,.27,.33,.83,.37,.19,.41,.07,.13,.02,.01,.01,.84,.95,.51,.55,.08,.89,.48,.61,.24,.2,.44,.2,.09,.71,.62,.22,.09,.94,.33,.01,.9,.79,.27,.31,.73,.49,.29,.22,.01,.01,.02,.14,.62,.88,.28,.44,.3,.9,.02,.18,.71,.43,.77,.13,.29,.12,.48,.3,.05,.05,.33,.07,.04,.03,.26,.78,.68,.28,.28,.31,.3,.43,.7,.84,.04,.92,.01,.04,.24,.23,.81,.94,.7,.42,.33,.16,.19,0,.06,.65,.32,.06,.76,.5,.55,.78,.1,.39,.3,.7,.17,.03,.43,.18,.95,.35,.14,.21,.13,.18,.96,.25,.28,.36,.78,.05,0,.64,.09,.06,.32,.03,.04,.01,.46,.18,.03,.13,.51,0,.87,.14,.61,.17,.07,.04,.59,.75,.24,.11,.28,.97,.01,.57,.86,.51,.74,.79,.34,.24,.34,.61,.64,.01,.68,.79,.18,.06,.49,.92,.73,.51,.35,.75,.32,.04,.24,.01,0,0,.79,.26,.06,.87,.02,.84,.47,.06,.24,.54,.58,.46,.85,.68,.48,.26,.95,.22,.11,.78,.01,.19,.36,.01,.28,.39,.91,.74,.24,.65,.18,.01,.59,.22,.13,.28,.29,.75,.28,.55,.39,.9,.01,.39,.85,.63,.76,.05,.16,.25,.56,0,.02,.08,.58,.06,.38,.42,.02,.83,.01,.01,.62,.55,.12,.15,.34,.33,0,.83,.61,.28,.17,.68,.37,.4,.83,.03,.05,.02,.23,0,.84,.56,.53,.01,.05,.23,.25,.28,.14,.01,.57,.57,.14,.96,.18,.07,.86,.58,.33,.03,.08,.19,.56,.78,.33,0,.87,.49,.84,.08,.06,.32,.14,0,.13,.1,.79,.2,.12,.64,.57,.55,.04,.18,.36,.1,.14,.01,.26,.74,.76,.95,0,.17,.3,0,.02,.68,0,.36,.08,.83,.62,0,.03,.66,.25,.92,.05,.08,.45,.49,.39,.66,.03,.91,.47,.78,.13,.87,.16,.82,.89,.32,.41,.27,.96,.29,.97,.21,.19,.37,.03,.62,.05,.7,.44,.04,.15,.56,.24,.73,0,.23,.05,.34,.06,.31,.22,0,.65,.18,.57,.23,.53,.01,.09,.44,.51,.38,.78,.18,.37,.1,.49,.11,.1,.07,.95,0,.56,.47,.23,.29,.04,.6,.24,0,.11,.06,0,.23,.99,.58,.36,.36,.68,.8,.09,.19,.32,.19,.02,.71,.24,.31,0,.87,.02,.19,.16,.64,.22,.22,.8,.12,0,.78,.1,.94,.32,.54,.01,.82,.11,.37,.12,.74,.76,.42,.01,.15,.95,0,.46,.06,.65,.62,.06,.16,.56,.01,.23,.37,0,.69,.46,.34,.03,.26,.19,.15,.01,.6,.44,.47,.24,.52,.44,.15,.9,0,.96,.11,.55,.96,.15,0,.98,.13,.48,.86,.05,.81,.26,.61,.01,.17,.1,.68,.54,.7,.78,.14,.71,.08,.88,.08,.3,.62,.04,.4,.06,.67,.03,.07,.18,.21,0,.45,.61,.48,.62,.23,.22,.17,.1,.77,1,.47,.03,.76,.37,.08,.03,.52,.16,.58,.18,.03,.14,.05,.46,.76,.05,.06,.94,.01,.22,.64,.67,.03,0,.72,.17,.29,0,.2,.65,.16,.38,.63,.66,.32,.29,.3,.45,.81,.07,.16,.2,.36,.53,.51,.52,.04,.04,.69,.21,.2,.39,0,.34,.46,.2,.03,.1,.89,.24,.84,.66,.17,.68,0,.95,.03,.86,.29,.29,.77,.85,.57,.08,.96,.3,0,.07,.98,.11,.03,.63,0,.93,.15,.9,.47,.82,.83,0,.13,.01,.36,0,.33,.1,.79,.67,.16,.6,.69,.28,.92,.31,.26,.38,.43,.26,.17,.09,.15,0,.03,.59,.68,.81,.03,.64,.41,.56,.08,.96,.97,.11,.21,.01,.93,.73,.57,.44,.93,.63,.01,.39,.03,.73,.98,.03,.49,.85,.7,.17,.18,.6,.25,.19,.5,.86,.58,.49,.6,.55,.83,.23,.75,.81,.52,.13,.4,.99,.4,.37,.13,.97,.25,.13,.56,.44,.71,.7,.09,.32,0,0,.8,.45,.57,.39,.91,.38,.66,.53,.68,.73,.84,.41,.03,.7,.84,.4,.3,0,.88,.78,0,.29,.19,.31,.38,.95,.71,.36,.58,.18,.03,.57,.17,.19,.92,0,.04,.05,.8,0,.75,.07,.19,.18,.19,0,.27,.09,.08,.3,.46,.91,.02,.02,.13,.22,.85,.09,.1,.24,.1,.68,.03,.63,.57,.02,.5,.96,.49,.37,.34,.95,0,.67,.36,.92,.98,.25,.46,.09,.41,.63,.08,.17,.05,.72,.16,.03,.63,.01,.09,.02,.26,.49,.45,.49,.76,.27,.16,.65,.91,.94,.09,.37,.37,.16,.65,.13,.04,.16,.22,.27,.02,.9,.82,.48,.13,.24,.44,.07,.74,0,.42,.56,.14,.64,.06,.35,.21,1,.23,.96,.12,.02,0,.21,0,.25,.27,.63,.97,.14,.08,.05,.4,.79,.11,.3,.22,.01,.13,.2,.11,.93,.63,.14,.01,.15,.07,.31,.21,.09,.66,.22,.52,.57,.4,.01,.52,0,0,.45,.77,.15,.94,.64,.42,.1,.13,.48,.08,.08,0,.02,.23,.88,.45,.03,.03,.95,.06,.21,.14,.83,.77,.1,.03,.03,.03,.82,.08,.3,.5,.05,.02,.15,0,.15,.25,.14,.55,.38,.27,0,.1,.09,.56,.31,.03,.76,.63,.03,0,.11,.71,.54,.22,.26,.54,.6,.45,.3,.19,.71,.01,.03,.07,.32,.93,.97,.46,.46,.5,.15,.66,.17,.31,.11,.25,0,.02,.03,.23,.16,.66,.01,.96,.01,.73,.14,0,.34,.72,.37,.08,0,.73,.67,.32,.6,.6,.26,.13,.95,.21,.63,.77,.5,.43,.74,0,.11,.88,.37,.86,.55,.7,.42,.03,.7,.11,.64,.03,.4,.24,.59,0,.1,.78,.55,.01,.99,.18,.24,.05,.7,.05,.17,.35,.39,.66,.26,.51,.24,.33,.78,.15,.57,.09,.02,.53,.7,.06,.03,.51,.02,.98,.98,.76,.04,.1,.36,.02,0,.51,.37,0,.17,.3,.72,.56,.85,.04,.22,.34,.16,.33,.42,.01,.44,.04,.73,0,.25,.31,.97,.65,.4,.78,0,.71,.58,.24,.85,.78,0,.82,.8,.45,.11,.37,.23,.25,0,.48,.27,.69,.52,.41,.38,.58,.99,.66,.14,.14,.01,.59,.67,.44,.9,.24,.33,.42,.5,.51,.63,.22,.07,.33,.66,.69,.34,.96,.6,.95,.01,.62,.62,.01,.08,.06,.36,.08,0,.03,.44,.09,.47,.96,.32,.16,.16,.02,.07,.03,.86,.02,.14,.89,.49,.63,.78,.06,.76,.54,.52,.53,.02,.43,.9,.2,.12,.64,.46,.92,.43,.24,.18,0,.5,.04,.47,0,.57,.37,.03,.17,.16,.33,.32,.49,.04,.8,.88,.71,.12,.63,.36,.96,.39,.08,.77,.03,.24,.58,.45,.78,.28,.47,.34,.56,.68,.06,.14,.79,.67,.47,.86,.92,.93,.02,.04,.86,.01,.34,.51,.38,.51,.9,.21,.48,.32,.15,.75,.29,.71,.92,.28,.82,.67,.42,.65,.42,.1,.76,.28,.97,.03,.53,.06,.18,.43,.24,.62,.8,0,0,.36,.87,.64,.82,.81,.93,.75,.01,.82,.9,.21,.01,.4,.72,.37,.93,.15,.42,.42,.48,.63,.31,.47,.03,.1,.73,.18,.45,.23,.93,0,.9,.45,.37,.72,.56,.67,.27,.04,.89,.93,.02,.47,.83,.47,.9,.87,.99,.11,.92,.32,.27,.09,0,.08,.1,.75,.89,0,.13,.17,.86,.8,.12,.59,.41,.24,.96,.56,.96,.89,.27,.01,.05,.11,.57,.46,.71,.45,.49,.1,.45,.6,.29,.65,.09,.86,.2,.1,.02,.96,.38,.02,.53,.87,.12,0,.64,.84,.06,.84,.81,.7,.57,0,.24,.51,.22,.98,.19,.48,.63,.43,.61,.09,.96,.54,.01,.82,.18,.98,.28,.66,.99,.58,.35,.36,.08,.88,.49,.7,.42,.25,.63,.55,.35,.58,.19,.35,.39,.64,.93,.92,.2,.32,.06,.06,.07,.07,.35,.09,.93,.8,.84,.72,.7,.95,.68,.94,.01,.63,0,.01,.39,.07,.27,.38,.64,.32,.71,.96,.21,.79,.15,.05,.61,.37,.32,.47,.12,.02,.03,.72,.5,.17,.09,.08,.98,.09,.63,.78,.32,.71,.68,.01,.63,.43,.52,.82,.02,.05,.3,.08,.15,.33,.77,.15,.77,.3,.12,.52,.14,.05,.64,.7,.27,.42,.03,.06,.37,.47,.8,.66,.26,0,.01,.19,.64,.12,.74,.05,.65,.02,.07,.16,.58,.56,.22,.69,.61,.98,.94,.58,.04,.65,.21,.4,.74,.01,.33,.55,.05,.41,.78,0,.14,.03,1,.16,.24,.81,.82,.1,.29,.05,.1,.25,.08,.79,.79,.48,.94,.09,.1,.21,.03,.82,.22,.52,.18,.43,.87,.34,.04,.82,.55,.3,.24,.17,.84,.66,.24,.76,.02,.43,.09,.05,.03,.25,.24,.91,.21,.99,.15,.64,.05,.64,.38,.03,.74,.44,.28,.53,.97,.11,.17,.63,.63,.1,.01,.01,.05,.8,.46,.84,.2,0,.06,.78,.89,.2,.68,.54,.24,.04,.32,.8,.29,.49,.92,.18,.94,.46,.1,.56,.1,0,.9,.81,.24,.29,.91,.1,.33,.57,.62,.01,.09,.92,.59,.09,.34,.67,.05,.02,.01,0,.24,.38,.51,.15,.94,.07,.14,.34,.77,.6,0,.27,.45,.53,.04,.15,.09,.14,.43,.07,.97,.06,.2,.29,.06,.17,.34,.85,.55,.13,.46,.97,.12,.46,.06,0,.91,.49,.33,.15,.79,.78,0,.52,.19,0,.11,.55,.3,.78,.23,.74,.8,.07,.98,.49,.88,0,.03,.15,.22,.01,.02,.05,.76,.19,0,.76,.99,.34,.13,.16,.05,.7,.02,.09,.17,.56,.74,.63,.22,.04,.76,.31,0,.05,.81,.02,.65,.13,.14,.07,.83,.05,.93,.27,.36,.83,.12,.79,.01,.34,.54,.06,.15,.72,.53,.71,.02,.11,.07,.57,.23,.32,.01,.57,.14,.34,.06,.05,0,.39,.11,.29,.05,.34,.8,.05,.21,.82,.02,.19,0,.2,.02,0,.78,.9,.04,.27,.38,.12,.34,.26,.39,.06,.52,.06,.13,0,.04,.36,0,.38,.53,.21,.13,.81,.08,.56,.85,.11,.54,.04,.19,.82,.2,.53,.67,.38,.11,.02,.03,.45,.69,.09,0,.14,.62];export{a as pvalData};
