const a=[0,.43,.28,.01,.08,0,.83,.09,.08,.16,.38,.01,0,.41,.06,.01,.05,.64,0,.02,.49,.75,.33,.19,.17,.05,.73,.36,.61,.48,.85,.91,.41,0,0,.09,.35,.02,.03,.05,.7,.15,.48,.09,.01,.07,.76,0,.49,0,.01,0,.81,.03,.76,.05,.05,0,.01,.69,.04,.13,.02,.3,.79,.22,.27,.01,.62,.74,.47,.28,.59,.59,.24,.1,.07,.02,.01,0,.03,.56,.76,.36,.23,.42,.14,.25,.3,0,.32,.1,.13,.03,.04,.01,.07,0,.11,.02,.83,.1,.76,.3,.1,0,.17,0,.26,.09,.05,.02,.2,0,.53,.15,.1,.09,.04,.26,.01,.49,.06,.7,.37,.01,.13,0,0,.04,.89,.71,.61,.01,.01,0,.85,.02,.46,0,.19,0,.23,.25,0,.95,.58,0,.41,.79,.23,.76,.69,.04,.93,.06,.26,0,.06,.03,.76,.26,.02,.33,.28,.07,.45,.05,.24,.22,0,0,.66,.7,.01,.18,.39,.19,.21,.32,.92,.01,.85,0,.1,0,0,0,.89,0,.26,.12,.01,.84,.5,.2,.56,.34,0,.36,.02,.4,.05,.01,.66,.84,.01,.21,.76,0,.75,.21,.05,.08,0,.2,.61,.68,.12,.02,.35,.12,.78,.17,.01,.05,.77,.12,.33,.85,.38,.6,.04,.06,0,0,.14,.04,.95,.84,.77,.12,.62,.23,.6,.59,.82,.49,.03,.13,.42,.09,.66,.63,.38,0,0,.68,.86,.06,.33,.98,.59,.18,0,.18,.24,.13,.91,.26,.11,0,.14,0,.01,.06,.62,.04,.03,.54,.98,0,.07,.66,.2,.01,0,.3,.65,.96,.88,.03,.05,.27,.42,.39,.19,0,.68,.01,.19,.12,.53,.12,.03,.03,.07,.31,.06,.03,.59,.38,0,0,.2,.01,.01,.64,.03,0,.17,.3,.11,.05,.01,.18,.21,.74,.13,.12,.39,.22,.81,.02,1,.18,.02,.74,.31,.48,.28,.76,.74,.26,.02,.09,.08,.16,.37,.11,.12,.04,0,.17,.68,.03,.67,.85,.13,.12,.96,.17,.26,0,.51,.01,0,.04,0,.49,.53,.92,.01,.01,0,.71,.04,.12,.95,.24,.17,.61,.97,.49,.6,.98,.49,.69,.03,.05,.04,0,.41,0,0,.08,.42,.4,.35,.03,.54,.23,.06,.03,.94,.26,.19,.1,.13,.48,0,.55,.07,.02,.03,.02,.15,.51,.86,.06,0,0,0,0,.59,.06,.05,.03,.46,.87,.09,.02,.53,0,.52,.02,.13,.03,.11,.13,.45,.55,.3,.01,0,.79,.09,.01,.49,0,.07,.3,.03,.75,.53,.04,.64,.14,0,.01,.09,.07,0,.01,.33,.68,.5,.1,.01,.02,0,.16,0,0,.83,.06,.06,.17,.33,.05,.3,.08,.96,.21,.01,.93,.15,.63,.65,.08,.79,.02,0,.89,.97,.13,0,.08,.47,.36,.65,.19,.06,.26,.27,.99,0,.33,.02,.06,.66,.85,.16,.59,0,.02,0,.11,.04,.28,.21,.22,.86,.28,.01,0,.03,.01,.08,.44,.39,0,.55,.27,0,0,.28,.03,0,.62,.02,.27,0,.08,0,.18,0,.04,.01,.51,.01,.05,.03,.15,.13,0,.53,.7,.52,.93,0,.4,.02,.88,.29,.03,.28,.14,.01,.05,.04,.1,.37,.63,.39,.07,.66,.48,.11,.18,0,0,.21,.27,.04,.25,.1,.64,.02,.2,.07,.43,.01,.37,.23,0,.01,.02,0,.13,.94,.2,.25,.19,.09,.71,.8,.02,.07,.35,.85,.51,0,.04,0,.93,.08,.89,.45,0,.26,.26,.64,.53,.69,0,.23,.23,.56,.17,.01,.14,.18,.39,.17,.22,.11,.66,.25,.18,.05,.99,.12,.06,.75,.31,.01,.04,0,.02,0,0,.09,.13,.08,.96,.02,.72,.13,.28,.16,.99,.16,.1,.47,0,.1,.89,.49,.78,0,.03,.88,.28,.9,.7,.1,.09,.01,.03,.97,0,.91,.27,0,0,.08,.03,.08,.11,.22,.14,.04,0,0,.04,0,0,.01,0,.27,.81,.6,.01,.16,.37,.01,.26,0,.49,.18,.62,.95,.36,.31,.09,.02,.87,.15,.22,.63,.33,.43,0,.94,.04,.77,.19,0,.06,0,.43,.08,.21,.11,.61,.1,.58,.54,.02,.27,.48,.57,.13,.02,0,.03,.05,.16,.53,0,.56,.07,.01,.08,0,.14,.44,.28,.81,.08,.83,.14,.39,.57,.01,.04,0,.62,0,.01,.04,.36,0,.87,0,0,.88,.15,.94,.1,.32,.08,.16,.1,.36,.2,.01,.08,.31,.17,.96,.37,.02,.05,.15,.03,.34,.05,.75,0,.25,.27,.47,.4,0,.58,.01,.35,.44,.3,.09,.04,0,.07,.79,.19,.37,.35,.21,0,.04,.32,0,0,.1,.4,.3,.17,.22,.1,.03,0,.43,.93,.78,.62,0,0,.68,.35,.92,0,.75,.06,.22,0,.3,.07,.29,.98,.02,.24,.17,.53,.12,.06,.3,.76,.05,.88,.08,.16,.33,0,.46,.31,0,.53,.39,.41,.1,.15,.86,0,.51,.77,.29,.88,0,.38,.26,.7,.08,0,.91,0,.1,.5,.21,.01,.02,.24,.79,.68,0,0,.01,.42,.02,.8,.57,.85,.82,0,.05,0,.3,0,.21,0,.15,0,.37,.2,.3,0,.91,.56,.29,0,.02,.16,.87,.29,.11,0,.08,.17,.64,.12,.02,.04,.25,.1,.24,.63,.73,.08,.19,0,.32,.79,.03,.16,.75,.49,.6,.59,.49,.57,.47,.57,.24,.29,.3,.22,.1,.09,.4,.16,.03,.42,.83,.44,.93,.62,.68,.61,.68,0,0,.31,.19,.17,.09,.05,.42,.95,.42,.04,.8,.32,.53,.3,.01,.92,0,0,.31,0,.35,.41,.17,.11,.54,.64,.28,.34,0,.17,.73,.29,.03,.01,.5,0,.01,.65,0,.97,.25,.64,.01,.03,.72,.69,.01,0,.07,.26,.12,.68,.49,.63,.13,.13,.44,0,.75,.11,.09,.61,.19,.23,.6,.05,.9,.24,.59,.13,.1,0,.98,.09,.87,.01,.61,.58,.76,.61,.28,.9,.01,0,.28,.63,.19,0,.06,.01,0,0,.24,.86,.2,.01,.04,.05,.59,.69,0,0,.1,.31,.03,.01,.38,.01,.12,0,.85,.36,.72,.02,.71,.82,.01,.69,.34,.14,.03,.11,.92,.17,.11,.25,.44,.18,.14,.09,.98,.06,.42,.21,.83,.03,.18,.27,.5,0,.89,.93,.06,.03,.06,.98,.24,.16,.06,0,.03,0,0,.87,0,.95,.03,.14,.87,.84,.31,.04,.01,0,.17,.05,.31,0,0,.06,0,.11,.19,.6,0,.06,.02,.43,.03,.05,0,0,.1,.02,.8,0,.63,0,0,.57,.14,0,.78,.01,.31,.12,.04,.12,.34,0,0,.92,.13,.05,.27,.01,.03,.27,.05,.84,.12,.12,.2,.9,0,.02,.02,.65,.04,.83,.54,.09,.05,.22,0,.57,.29,.33,0,0,.12,0,.09,.18,.31,.03,.29,.09,.93,.24,0,0,.55,.09,.32,0,.17,.14,0,0,.62,.65,0,0,.05,.04,.03,0,.04,.98,.13,.01,.75,.26,.39,0,.08,0,0,.07,.09,.06,.19,0,.21,0,.41,.1,0,.07,.82,0,.04,0,.34,.17,.01,.48,.29,0,.22,.4,.4,0,.24,.52,.65,.85,0,0,.74,.26,.29,.25,.36,.19,0,.78,.59,.28,0,.05,.88,.92,0,.12,.75,.31,0,.02,.81,.12,.27,.74,.42,.18,.42,.06,.08,.06,.32,.28,.1,.45,0,0,.16,.05,.98,.05,.14,.5,.31,.26,1,.43,.22,.04,0,.71,.92,0,.6,.92,.01,.18,.16,.06,.1,.1,.33,.59,.05,.41,.01,.19,.04,.85,.43,.29,0,.26,.14,.02,.21,.35,.55,0,.31,.56,.2,.29,0,0,.33,.21,.32,.26,.11,.65,.65,0,.38,.14,.32,.36,.05,.24,.9,.44,.43,.01,.02,0,.2,.98,.32,.7,.35,.89,.51,.16,.38,.03,.05,0,.3,.7,.07,.02,.06,.4,.29,.16,.02,.3,0,.16,.49,.34,.92,.33,.07,.02,.01,.04,.36,.98,0,.08,.08,0,.53,.07,.06,.14,.23,.14,.2,.56,0,0,.05,.79,.62,.01,.36,.52,.03,.02,.92,.02,.96,.13,.31,.01,0,.3,.01,.77,.01,.3,.16,0,.29,.46,.05,.55,.18,0,.23,.8,.26,.02,.04,.04,.14,.47,.01,.24,.33,.1,0,.82,.09,.67,0,.1,.15,.31,.07,.34,.86,.2,.03,.14,.05,.31,.03,.39,.01,.19,.02,.11,0,.18,.17,.34,.34,.54,.55,.22,0,.24,.36,.19,.03,.95,.82,.26,.44,.04,.15,.69,.02,.05,.01,.06,.28,.09,.03,.09,.01,.06,.05,.08,.97,.1,.03,.67,.92,.01,.61,.03,.52,.02,0,.42,.01,0,.56,0,.01,.21,.82,.9,.06,.93,.22,.03,.93,0,.1,.15,.1,.16,.3,.39,.93,.01,.82,.05,0,0,.91,.01,.35,.03,.01,.76,.08,0,.33,.7,.54,.01,0,.08,.88,.05,0,.15,.06,0,.05,.01,.09,.03,.03,.89,.96,.03,.62,.01,.56,.03,.41,.06,.04,.05,.07,.49,.01,.39,.13,.25,.01,.85,.24,.8,.9,.66,.67,.02,.14,.65,.07,.19,.31,.04,.06,.02,.02,.05,.45,.33,.05,.01,.03,0,.09,.23,.64,.42,0,.3,.53,.13,.07,.18,.9,.3,.04,0,.42,0,.06,.06,.05,.08,.08,.05,.04,.87,.02,.08,.77,.35,.15,0,.15,0,0,.02,.04,.03,.12,.23,.07,0,.23,.3,.07,.13,.46,.02,.02,.02,.03,.04,.28,.38,.5,.02,0,.21,0,.33,.15,.48,.15,.92,.84,.81,.04,.48,.8,.62,.19,.05,0,.06,.59,.15,.19,.12,.07,.4,.14,.46,.09,.2,.11,.14,.77,.01,.01,.22,.22,.13,.21,0,0,0,.15,.35,.31,.47,.21,.09,.03,.03,.92,.55,.46,.51,0,.07,.41,.38,.62,.9,.1,.82,.19,.61,.22,0,.01,0,.02,.81,.03,.02,.47,.05,.61,.4,.26,.75,.05,.56,.1,.15,.82,.44,.28,.53,.44,.46,.17,.2,.01,.04,.48,.55,0,.21,.04,.01,.15,.08,.02,.01,.43,.19,.22,.06,.1,.13,.07,.08,.01,.14,.19,.12,.05,.48,0,.23,.36,.03,.51,.13,.57,.06,.04,.08,.41,.11,.31,0,.39,.19,.26,.67,.01,.22,.25,.32,.11,.03,.04,.56,.23,.25,.62,.36,.28,.99,.94,0,.26,.13,.26,.42,.16,.24,.81,.05,0,.16,.53,.47,0,0,.5,.11,.43,.73,.04,0,.8,.62,.53,0,.17,.65,0,.01,1,.9,.02,.33,.69,.14,.73,.03,0,.67,.18,0,.8,.15,.5,.01,.06,.07,0,.07,.99,.16,.01,.86,.51,.57,.02,.39,.03,0,.7,0,.01,.25,.09,.48,.96,.28,.77,.95,.32,.09,0,.34,.05,.08,.12,0,.82,.13,.07,.38,.16,.24,.05,.17,.57,.41,.72,.46,0,.78,.35,.86,.41,0,.05,0,.13,.78,.16,0,.19,.02,0,.58,.11,0,.08,.19,.67,0,.2,0,.28,0,.11,.57,0,.28,.16,.23,0,.17,0,.27,.15,.05,0,.96,.2,.04,.16,0,.01,.55,0,.03,.9,.2,.33,.49,.41,.39,.12,.05,0,.05,.46,0,.39,.16,.79,.31,.01,.17,.39,.12,0,.05,.87,.01,.03,.68,0,.11,.45,.07,.04,.32,.01,0,.3,.48,.14,.31,0,.08,0,.14,.65,.1,.01,.19,.05,.23,.18,.34,.57,.14,.35,.11,.21,.11,.17,0,.16,.14,.97,.09,.08,.12,.16,.02,.02,.35,.73,0,.02,.17,.08,0,.05,.55,.24,.79,.74,.01,.22,.43,.88,.1,.79,.35,.76,.75,.63,.05,.03,.82,.08,.04,.07,0,0,.09,.71,.24,0,.05,.8];export{a as pvalData};
