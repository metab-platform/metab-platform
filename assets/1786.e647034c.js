const a=[.02,.95,0,.42,0,.06,.05,.94,.35,.83,.06,.09,.99,0,.1,.93,.08,.12,.12,.69,.54,.05,.94,.46,.01,0,0,.13,0,.01,0,.01,0,.09,.02,.72,0,.41,.29,.19,.41,0,0,.47,.48,.63,.52,.8,.78,.54,.2,.63,.77,0,.05,.96,.3,.27,.59,0,0,0,0,.36,.45,.28,0,.46,.02,.69,.28,.1,0,.75,0,.47,.63,0,.16,.25,0,0,.67,0,.02,.52,0,.9,0,0,.45,.7,.3,0,.19,.1,0,.14,.29,0,.09,0,.04,0,.01,.95,.04,.03,0,0,.48,.67,.2,0,.08,.01,0,.17,.43,.01,.97,.56,.31,.34,.35,0,.01,.22,1,0,.66,0,.48,.18,.03,.83,.93,.09,.05,.4,0,.36,0,0,.98,.14,.26,.11,0,.93,0,.41,.74,.18,.68,.06,.53,.29,.04,.3,.83,0,.01,.01,.14,0,0,.18,.23,0,.63,.93,.89,.07,0,.99,.11,.09,0,0,.27,.08,.82,.06,0,.15,.74,.71,.22,.18,1,.04,.32,0,0,0,0,.21,.92,.02,.5,0,0,.44,.01,0,.05,.03,.01,.65,.55,.07,.13,.01,.2,0,.56,.5,.71,0,0,.04,0,0,.01,0,.86,.31,.19,.51,.11,0,.27,0,.36,.94,.03,.03,.89,.67,.32,.03,.69,.96,.38,.06,.18,.9,.63,.28,.32,.43,.09,0,0,.81,.26,.01,.8,.02,.29,.83,.02,0,.01,.01,.57,0,.41,.08,.02,.01,0,.03,.01,.54,.43,.02,0,.72,.18,0,.49,.01,.31,0,.01,.01,.64,.21,.91,.02,0,.04,.23,0,.54,0,.37,.4,.75,0,.03,.01,.81,.02,.73,0,0,.15,0,.01,.78,.72,.18,.39,.38,.71,.01,.33,0,.02,.52,0,.06,.16,0,.46,.96,.11,.01,0,.19,.59,.04,.32,.99,.01,.06,.1,.07,0,.01,.46,.02,0,.54,.01,.01,.93,0,.07,.55,.22,0,.5,.14,.85,0,.01,.23,.04,.18,.03,.46,0,.72,0,0,.54,.19,.35,.96,.03,0,.86,.54,0,.33,.12,.89,.94,.71,.3,.88,.12,.72,.4,0,0,0,.4,.43,.44,.07,0,0,.2,.74,.34,.09,.09,0,.16,.01,.01,.03,0,0,0,.04,0,.57,0,.5,.52,0,0,.21,.7,.74,0,.99,.93,.01,0,0,.5,.1,.01,.58,.1,.01,.49,.8,.01,0,0,0,0,0,0,0,.04,.09,0,0,0,.18,0,.17,.01,0,.15,.25,.01,.45,0,.04,.01,0,0,0,0,.21,.4,.2,.22,0,0,.02,0,.01,.65,.1,0,.03,.48,0,0,0,.03,0,.11,.26,.17,.03,.46,0,.01,.9,.16,.04,.08,0,0,.05,.38,0,.71,.53,.82,.01,0,0,.07,.01,0,0,0,0,.31,0,.05,.19,.1,.73,.49,.01,0,.56,0,.14,.85,0,.45,.05,.38,.92,0,.28,.06,.11,.03,.38,.42,.09,.03,.02,.41,.44,.46,.42,.05,.16,.04,.39,.09,.27,.06,.02,0,0,.04,.02,.07,.36,.09,.86,.09,.07,.57,.77,.79,.02,0,.74,.63,.3,.57,.01,.02,.25,0,0,0,.03,0,.14,.01,.32,.9,0,.03,.02,.01,0,0,.94,.01,.05,.51,.48,0,.88,0,0,0,.01,.64,0,0,0,.91,.03,.1,.99,.79,.79,.17,.17,.03,.87,.07,.13,0,0,.07,.65,.71,.88,.44,.03,.98,.07,.02,.73,.01,0,.01,.16,0,.01,.02,.09,.57,0,.23,.49,.11,.01,0,.05,.28,.85,0,.08,0,.33,.02,.18,0,.58,0,0,.51,.93,.36,.22,.7,0,0,0,.42,.33,.98,.36,.05,0,0,.36,.65,.09,0,.4,.16,0,0,.14,.07,.15,.01,0,0,.02,.27,0,0,0,.7,.57,.42,.02,.56,.87,.06,.12,.04,.2,.01,0,.41,.02,0,.4,.75,.69,0,.31,.02,0,.26,.56,.88,.31,.1,.45,.44,.23,.49,.76,0,.01,.39,0,0,.03,.82,.02,0,0,.53,0,.84,.03,.96,.01,.57,.12,.28,.08,0,.16,.07,.09,.06,.56,.03,.68,0,.07,.48,.06,.22,.01,.61,.71,.2,0,.55,0,.06,0,.5,.04,.14,0,.35,.01,.12,.05,0,0,.81,.08,.02,.94,.52,0,.28,0,.07,.15,0,.01,0,.01,0,.01,.38,.48,.56,0,.76,0,.34,0,0,.78,0,.27,.86,.1,0,.07,0,.27,.77,.8,.54,.69,.63,0,.53,0,.71,0,.76,.27,0,.02,.93,.79,0,.95,0,.02,.88,.23,.93,0,0,.09,.25,.39,0,.76,.49,.64,.07,0,0,.79,.87,.5,0,.04,.13,.02,.68,.46,.94,.15,.39,1,.01,.22,.99,.42,.48,0,0,.33,.06,.03,.86,.01,.31,.9,.06,.7,.24,.74,.11,0,.87,.01,.93,.12,.37,0,.15,.61,0,.01,.73,0,.1,0,.05,0,.1,.02,.01,0,.36,0,.12,.01,0,.01,0,.43,.17,.53,.03,.28,.69,.36,.45,.79,.06,.09,.32,0,0,.79,.95,.42,.59,0,.96,0,.01,0,0,.54,0,0,.6,.08,.06,0,0,0,0,.02,.5,.06,0,.42,.28,.3,0,.25,.15,.56,0,.6,.47,.52,.03,.08,.74,.51,.5,0,.01,0,0,0,.28,.03,.1,0,.6,.58,.85,.01,.2,.74,.18,.11,0,0,.08,.72,.13,.04,0,0,.48,.17,.76,.51,.55,.02,.76,.99,.17,.03,.1,.27,.07,.01,.07,.14,.16,0,.16,.57,.52,.16,.82,.9,.48,.12,.58,.66,.67,.02,0,.02,.01,.1,.22,.17,.03,.04,.33,0,.31,.29,.05,.39,.02,0,.26,.98,.98,.48,.63,.14,.27,.99,.14,0,.46,.14,.28,.28,0,.11,.33,.04,.09,.5,.23,.23,.04,.95,.06,.52,.73,.01,.22,.04,.82,0,0,0,.31,.33,0,.14,0,.51,.81,.02,.55,.04,.4,0,0,.3,.06,.02,.18,0,0,.22,.51,.37,.73,.01,.49,.87,.06,.11,0,.63,.28,0,.54,.04,0,.73,.02,0,0,.53,.1,.05,.36,0,.25,.02,.44,0,.79,.9,.01,0,.29,.36,.16,.01,0,.02,0,.06,.13,.08,.27,.11,.32,.27,.31,.51,.12,.64,0,0,.03,.64,0,0,.02,.63,.03,0,.14,.77,0,0,.81,0,.76,0,0,.39,.54,.1,0,.27,.04,.75,.26,.56,.54,0,0,.43,.17,0,0,0,.01,0,.18,.22,.54,0,.13,.01,.85,.01,.8,0,.07,.84,.32,.53,.01,.02,.34,0,.01,.53,.03,.29,.87,.53,.07,0,.82,.02,0,0,.1,.21,0,.55,0,.22,0,.06,0,.07,1,0,.71,.51,0,.43,0,.14,0,0,0,.05,0,0,.85,.55,.49,.99,0,0,.6,.12,0,0,.12,0,0,0,.69,.76,.94,.01,0,0,.83,.91,.61,.45,.31,0,.77,0,.06,.63,.51,.97,.14,0,0,.34,0,0,0,.21,.14,.29,.12,.02,.13,.04,.48,0,.54,0,.04,.21,.06,0,.05,.14,.17,0,.47,.23,.43,.8,.87,0,.15,.06,.77,.04,0,0,0,.26,.03,.78,0,.01,0,0,0,.04,.16,.17,.17,0,.19,0,.01,.03,0,0,.02,.51,.16,.23,0,0,.17,.04,.17,.55,.08,.51,.01,.01,0,.02,0,.34,0,.21,.8,.22,.01,.49,.87,.09,0,.19,.79,.16,.08,.43,.1,.87,0,.32,.44,.01,.09,.01,.07,.02,.12,.38,.17,.09,.98,0,0,.53,.53,0,.53,.01,.22,.12,.64,.2,.93,.66,.03,.95,.07,.08,0,.37,0,.91,.17,.36,.28,.43,.45,.19,.63,0,0,.63,.01,.26,0,0,0,.92,.24,0,.17,.69,.93,.89,.01,.02,.51,.12,.02,.06,.22,0,.01,.57,.26,.15,.04,.76,.12,.28,.1,.05,.46,0,0,.09,.86,.02,.01,.33,.01,.81,.96,0,.1,0,0,.41,.14,.01,.12,.17,.37,.01,0,.17,.35,.37,.05,.89,.04,.05,0,.98,0,0,.01,0,.01,.77,.74,.5,.19,.01,.86,.04,0,0,.62,.99,.19,.01,.05,0,.3,0,.06,0,.01,.02,.61,.08,.04,.87,.14,.11,.04,.15,.12,.56,0,.02,0,.04,.02,.06,.03,.93,.36,.44,0,.01,0,0,0,.14,.03,0,.12,.7,.1,.04,.13,.04,.18,.02,0,0,.82,.01,.08,.46,.25,.14,.76,.03,.01,0,.63,.77,.73,0,0,.65,.14,0,.32,.75,0,0,0,0,.23,.01,0,0,.12,.65,.79,0,.59,0,.5,0,.03,.38,.36,0,.31,0,.08,.08,.07,.01,.06,0,.61,.1,.19,.16,.29,0,.04,.01,0,.87,.01,.82,.8,0,.29,.12,.89,0,.01,0,.25,.07,.43,0,0,0,.18,.25,.87,.78,.53,0,.71,.09,.01,.4,0,0,0,0,0,.01,.18,.01,.09,.09,.02,.11,.02,0,.06,0,0,.12,0,.81,0,0,.02,.21,.21,.59,.22,.06,.14,0,.13,.05,.58,.13,.39,.27,0,0,0,0,0,.01,.16,.45,.94,.78,.01,.07,0,.12,0,0,.39,.05,.36,1,.1,0,.21,.99,0,0,0,0,0,.1,.02,0,.1,.23,0,.13,0,0,.02,0,.05,0,0,.94,0,.67,.55,.02,.71,.76,.08,.1,.8,.87,.16,0,.87,.44,0,0,.65,.65,0,.04,.31,0,0,0,.5,.88,.01,0,.39,.05,.84,.12,.06,.34,0,0,.28,.03,0,.14,1,.2,.82,0,.01,.23,.1,.49,.54,.62,.12,.81,.01,0,.01,.12,.03,.68,0,.85,.69,.1,.13,0,.93,.07,.02,0,.01,.72,0,.01,0,0,.99,0,.01,0,.08,.67,.02,.99,.53,.63,.69,.28,.89,0,0,.34,0,0,.04,.07,.04,0,.01,.11,0,0,0,0,0,.04,0,.01,0,.01,0,0,0,.02,0,.02,0,.16,0,0,0,.74,.88,.03,.12,0,.02,.01,.87,.01,0,0,0,0,0,0,.09,0,.98,.32,0,.35,.01,.12,0,0,0,0,.32,0,.49,0,.83,.81,.65,0,.72,.77,.01,.01,.98,.05,0,.07,0,.08,.23,.33,.02,.13,.97,.01,.39,.26,.32,.13,.1,0,.08,.16,.11,.8,0,.49,.29,0,0,.46,.21,0,0,0,.4,0,.99,0,.01,.45,.66,.03,.01,.62,0,.82,.01,0,0,0,0,.09,.77,0,0,.49,.68,.01,.64,0,0,.53,.25,0,.16,.48,.2,0,0,.18,.54,0,0,0,.95,.42,.12,.03,0,.45,0,.01,.16,0,0,.71,0,0,.62,0,0,0,.03,.54,.86,.42,.07,0,.01,.9,.72,.18,0,0,0,0,.43,.01,.05,0,0,0,.91,.58,.02,0,.21,0,.59,.18,.66,0,0,0,.02,.07,.9,0,.28,.29,.95,.63,.03,.12,.1,.57,0,0,.14,0,.06,.63,.14,.61,.12,.07,.37,.02,.03,0,.61,0,.01,.07,.1,.03,0,.42,0,.22,.33,0,0,0,0,0,.38,0,0,0,.16,.64,.02,0,0,.01,0,0,.08,.19,0,.07,0,.36,0,0,0,0,0,.02,0,.02,.91,0,0,.92,0,0,.41,0,.17,0,0,.43,.76,.48,.23,0,.94,0,.39,0,.04,.07,.25,.43,.08,.74,.15,.08,.42,0,.83,.7,0];export{a as pvalData};
