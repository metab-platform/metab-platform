const a=[0,.66,.03,.35,.15,0,.53,.4,.88,.26,.07,.07,.02,.03,.03,.44,.3,.53,0,.09,.93,.28,.41,.3,.08,.24,.83,.98,.62,.92,.31,.78,.05,0,0,.1,0,.11,.37,.51,.84,.16,.08,.08,.29,.19,.61,0,.46,.15,.34,0,.48,.21,.18,.38,.21,0,.26,.26,.26,.11,.43,.51,.57,.19,.08,.13,.45,.08,.99,.06,.29,.59,.15,.53,.61,.21,.29,.02,.22,.67,.69,.39,.54,.42,.21,.55,.4,.11,.73,.04,.63,.14,.01,.03,.26,.01,.89,.15,.43,.13,.22,.24,.73,0,.05,.02,.05,.55,.97,.74,.17,.57,.19,.33,.09,.16,.31,.08,.03,.13,0,.06,.76,.96,.13,.04,.19,.1,.44,.8,.8,.27,0,.12,.17,.02,.27,0,.22,0,.71,.11,0,.13,.4,.46,.15,.29,.12,.56,.86,.98,.94,.31,.61,0,.77,.09,.93,.16,.12,.38,.54,.29,.6,.12,.6,.22,0,.14,.92,.64,.6,.12,.25,.65,.34,.18,.21,.11,.19,.33,.99,.03,.08,0,.53,.01,.7,.12,.1,.15,.1,.02,.28,0,.06,.71,.56,.21,.08,.01,.98,.15,.24,.98,.62,0,.93,.14,.12,.09,0,.87,.93,.88,.2,.12,.84,.89,.98,.25,.66,.1,.8,.12,.01,.87,.07,.88,.5,.28,.01,0,.23,.87,.92,.67,.89,.05,.48,.57,.72,.97,.31,.38,.02,.1,.38,.08,.51,.3,.06,.08,.2,.09,.93,.15,.34,.46,.19,.16,.78,.91,.81,.28,.09,.02,.06,.08,.06,.23,.12,.02,.26,.17,.17,.31,.96,.39,.13,.02,.5,.78,.17,.01,.38,.35,.39,.16,.16,.94,.57,.05,.28,.12,.25,.41,.36,.06,.91,.02,.27,.74,.98,.52,.96,.43,.21,.15,0,0,.02,.42,.29,.39,.27,.04,.73,.39,.17,.23,.18,.39,.08,.59,.43,.51,.06,.96,.96,.01,.91,0,.09,.64,.48,.61,.5,.12,.53,.91,.19,.21,.87,.48,.34,.52,.19,.96,0,.54,.08,.19,.93,.87,.24,.18,.13,.36,.24,0,.66,.36,.01,.03,.09,.13,.06,.54,.6,.91,.05,.72,.93,.3,.94,.45,.09,.83,.9,.71,.9,.87,.34,.95,.33,.14,.22,0,.39,.64,.12,.06,.55,.11,.93,.98,.85,.83,.27,.94,.95,.8,.09,.17,.62,.2,.68,.6,.85,.2,.04,.14,.11,.03,.89,.01,0,.59,.02,0,.37,.03,.04,.01,.23,.27,.15,.57,.04,.03,.79,.44,.82,.14,.09,0,.13,.33,.5,.01,.1,.07,.1,.46,.38,.28,.4,.69,.16,.83,.44,.91,.37,.04,.07,.57,.19,.15,.74,.23,.96,.16,.43,.96,.8,.17,.02,.03,0,0,.84,.06,.18,.53,.01,.73,.67,.11,.02,.42,.22,.15,.24,.37,.4,.17,.99,.19,.23,.95,.01,.1,.23,.01,.02,.55,.73,.78,.24,.53,.33,.65,.21,.02,.14,.23,.04,.97,.38,.15,.27,.41,0,.42,.31,.21,.69,.02,.29,.85,.69,0,.79,.07,.79,.06,.82,.35,.03,.25,0,.01,.74,.15,.84,.12,.43,.41,0,.52,.04,.49,.14,.71,.44,.2,.05,.07,.14,.14,.26,0,.41,.16,.9,.76,.36,.07,.55,.85,.85,0,.68,.11,.01,.17,.23,.22,.48,.2,.04,.1,.11,.9,.39,.01,.02,0,.39,.22,.78,.1,.03,.54,.05,.02,.15,.52,.68,.09,.52,.89,.13,.47,0,.25,0,.1,.03,.02,.11,.69,.89,.31,0,.11,.08,.01,.01,.04,0,.31,.07,.66,.2,0,.67,.18,.94,.69,.21,0,.83,.55,.11,.51,.42,.49,.02,.8,.11,.84,.05,.26,.26,.48,.43,.13,.41,.38,.08,.1,.85,.44,.01,.84,0,.98,.4,.08,.04,.45,.13,.98,.02,.7,.04,.2,.06,.31,.72,0,.09,.77,.24,.18,.46,.03,0,.76,.33,.3,.45,.21,.26,.27,.03,.87,.38,.06,.18,.01,.52,.5,.1,.39,.26,.96,.69,0,.01,.14,0,.01,.87,.3,.37,.65,.31,.5,.01,.26,.89,.01,.03,.83,.07,.13,.36,.17,.15,.82,.53,.6,.07,.93,.35,.05,0,.06,.28,.68,.29,.81,0,.25,.44,.32,.09,.51,.62,.19,.04,.77,.95,0,.14,.01,1,.84,.99,.32,.49,.05,.59,.37,0,.68,.16,.12,.05,.83,.55,.06,.01,.55,.48,.73,.04,.23,.31,.25,.56,0,.96,0,.82,.78,.08,0,.91,.15,.65,.57,.07,.93,.15,.62,.11,.2,.1,.13,.56,.2,.02,.73,.57,.91,.16,.39,.25,.58,.1,.45,.04,.84,.16,.24,.01,.07,0,.95,.2,.58,.63,0,.16,.89,.14,.07,.9,.36,0,.79,.65,.05,.04,.06,.56,.8,.07,.09,.09,.04,.35,.1,.29,.11,.27,.75,.03,.67,.41,0,0,.87,.06,.07,0,.12,.07,.06,.05,.12,1,.44,.53,.12,.6,.17,.75,0,.16,.49,.44,.02,.12,.15,.29,.08,.89,.61,.42,0,.36,.52,.99,.09,.05,.85,.92,.97,.29,.18,.38,0,.79,.07,.83,.45,.3,.23,.48,.52,.02,.6,.68,0,0,.51,.03,.01,.79,0,.55,.08,.17,.49,.03,.83,0,.13,.01,.39,0,.27,0,.69,.1,.89,.49,.39,.01,.64,.13,.76,.8,.06,.09,.03,.03,.12,0,.15,.07,1,.08,.1,.19,.08,.65,.07,.91,.67,.02,.06,0,.97,.76,.85,.71,.52,.87,.01,.62,.59,.77,.2,.24,.72,.62,.54,.15,.86,.2,.2,.05,.77,.93,.6,.03,.52,.83,.22,.07,.91,.14,.05,.02,.2,.58,.42,.57,.87,.45,.04,.28,.68,.95,.91,.42,.06,.13,0,0,.12,.46,.48,.79,.65,.02,.59,.41,.53,.43,.68,.32,.01,.4,.27,.03,.34,0,.44,.02,0,.94,.06,.76,.08,.14,.01,.1,.94,.81,.72,.33,.15,.08,.71,.18,.16,.26,.98,0,.27,0,.96,.09,.49,.17,.33,.05,.87,.26,.21,.68,.11,0,.06,.53,.88,0,.52,.98,.19,.27,.06,.55,.54,.13,.33,.26,.77,1,.14,.41,0,.34,.18,1,.35,.08,.47,.18,.27,.49,.09,.01,.17,.05,.35,.14,.78,.01,.18,0,.64,.5,0,.16,.94,.25,.01,.58,.38,.11,.17,.49,.28,.2,.55,.53,.18,.06,.23,.16,.01,.73,.33,.17,.03,.33,.84,.31,.49,0,.4,.77,0,.37,0,.14,.07,.29,.15,.07,.13,0,0,.12,.09,.07,.28,.63,.51,.38,.11,.21,.04,.08,.06,.14,.92,0,.28,.13,0,.54,.02,.07,0,.12,.45,.14,.42,.13,.02,.07,.14,.95,.46,0,.54,.01,0,.02,.21,.04,.96,.37,.28,.16,.35,.26,.5,.19,0,.08,.21,.95,.29,.12,.57,.49,.84,.4,.78,.69,.14,.03,0,.3,.06,.59,.32,.04,.42,.92,.29,.12,0,.9,.12,.09,.53,.02,0,.01,.1,.46,.14,.71,.06,.34,1,.02,.02,0,.18,.06,.71,.03,.6,.63,.51,.03,.16,.08,0,0,.11,.59,.36,.26,.44,.55,.18,.33,.3,.08,.04,.35,.11,.01,0,.05,.15,.2,.95,0,.3,0,.44,.33,0,.18,.16,.14,.12,.01,.16,.32,.01,.92,.15,.68,.05,.3,.52,.42,.06,.77,.6,.54,0,.34,.44,.11,.42,.73,.55,1,.22,.9,.75,.52,0,.31,.86,.26,0,.06,.6,.56,0,.31,.04,.36,.02,.66,.38,.75,.05,.61,.33,.13,.06,.24,.2,.36,.08,.05,.8,.07,.13,.8,.07,.02,.42,.07,.45,.97,.05,.1,0,.22,.9,0,.32,.82,.02,.22,.6,.43,.34,.65,.15,.29,.98,.06,.08,.81,0,.76,.13,.27,0,.97,.19,.29,.29,.88,.3,.02,.5,.37,.98,.13,.95,0,.67,.29,.43,.73,.44,.09,.25,0,.72,.08,.98,.6,.45,.61,.37,.59,.16,.39,.08,0,.58,.59,.45,.31,.71,.56,.62,.72,0,.2,.11,0,.97,.32,.34,.07,.22,.52,.82,.02,.01,.47,0,.05,.3,.09,.03,.58,.59,.52,.26,.21,.63,.65,.51,.22,.59,0,.86,.35,.03,.43,.53,.08,.19,.1,.02,.05,.96,.72,.26,.25,.05,.88,.16,.01,.39,.42,.88,.29,.09,.42,0,.13,.17,.9,.07,.24,.13,0,.29,.11,.65,.56,.16,.05,.32,.97,.11,.32,.37,.35,.75,.78,.01,.75,.18,0,.05,.08,.35,.69,.25,.7,.19,.82,.11,.3,.12,.43,.17,.25,.34,.37,0,.98,.29,0,0,.37,.96,.9,.53,.03,.13,.49,.01,.31,0,.7,.94,.33,.05,.33,0,.35,.42,.16,.87,.11,.87,.09,.61,.03,.01,.2,.51,.03,.63,.04,.31,.28,.31,.78,.36,.68,.99,.83,.05,.25,.59,.26,.01,.4,.19,.64,.02,.3,.95,.27,.4,1,.44,.22,.03,.25,.59,.41,.24,.35,.84,.02,.9,.16,.84,.93,.79,.47,.85,0,.81,.81,.73,.25,.79,.57,.54,.99,.87,.72,.56,.34,.13,.07,.18,.92,.2,.19,.5,0,.18,.21,.28,.82,.1,.47,.75,.27,.51,.27,.41,.84,.66,.1,.02,.39,.12,.98,.3,.83,.14,.04,.16,.07,.04,1,.03,.25,.98,.24,.34,.64,.58,.03,.56,.56,.32,0,.43,.49,.22,.29,.59,.86,.49,0,.22,.03,.06,.95,.25,.04,.54,.01,.66,.11,.96,.12,.07,.44,.01,.13,.31,.26,.54,.28,.41,.8,.03,.25,.63,.38,.82,.01,.47,.53,.3,.14,.47,.92,.6,.54,.14,.88,.2,.05,.09,.04,.18,.12,.86,.1,.89,.67,.86,.69,.71,.43,.19,.46,0,.19,0,.06,.19,.97,.29,.6,.17,.2,.34,.89,.96,.37,.63,.01,.13,.12,.33,.99,.09,.02,.08,.57,.64,.03,.12,.06,.51,.05,.8,.62,.84,.53,.06,.13,.97,.33,.06,.1,.04,.02,.16,.49,.08,.99,.8,.74,.66,.06,.04,.16,.03,.89,.75,.62,.65,.92,.03,.54,.06,.64,.86,.17,.39,0,.13,.33,.14,.13,.07,.41,.46,.01,.12,.37,.83,.03,.17,.94,.58,.04,.31,.44,.04,.99,.27,.2,.53,.01,.32,.39,.13,.4,.83,0,.07,.04,.69,.29,.99,.39,.58,.75,.14,.13,.26,.1,.8,.15,.07,.61,.73,.84,.05,.04,.02,.14,.24,.81,.19,.08,.79,.62,.07,.75,.21,.02,.78,.12,.06,.23,.09,.22,.01,.48,.15,.04,.18,.01,.56,.25,.31,.76,.02,.99,.1,.21,.2,.03,.2,.15,.23,.03,.95,.06,.03,.06,.87,.12,0,0,0,.74,.47,.22,.16,0,.09,.15,.85,.12,.99,.44,.05,.31,.2,.7,.73,.33,.77,.55,.25,.81,0,.72,.11,0,.59,.45,.11,.55,.99,.17,.8,.19,.82,.03,.01,.41,.89,.46,.76,.99,.42,.01,.01,0,.8,.31,.21,.02,.06,0,.22,.34,.79,.79,0,.74,.21,.26,.04,.02,.03,.4,.45,.25,.72,.07,.33,.38,.09,.87,.14,.15,.02,.93,.15,.21,.07,.84,.12,0,.21,.13,.86,0,.37,.36,0,.65,.11,.02,.01,.9,.52,.1,.03,.52,.16,0,0,.68,.65,.01,.07,.05,.01,.06,.21,.11,.36,.19,0,.55,.48,.36,.06,0,.03,.51,.1,.15,.04,.28,.09,.54,.07,0,.24,.67,0,.52,.04,.11,.27,0,.55,.05,.38,.08,.8,.1,.92,.33,0,.42,.07,.73,1,.08,.19,.84,.98,.74,.29,0,.06,.71,.08,.12,0,.26,.43,.24,.03,.11,0,.42,.01,.26,.54,.84,.93,.04,.09,.07,.04,.17,.02,.01,.04,.01,.89,0,.03,.2,.09,.15,.36,.51,.12,.11,.81,.01,.13,0,.09,.6,.02,.05,.62,.39,.18,.92,.12,.15,.87,.02,.29,.09,.88,.45,.54,.78,.53,.13,.25,0,.15,.92,.82,.14,0,.93,.21];export{a as pvalData};
