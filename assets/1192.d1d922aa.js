const a=[.11,.01,.03,.42,0,0,.11,0,.01,.31,.1,.5,.93,.23,.79,.61,.32,.13,.27,.76,.71,.35,.57,.08,.2,.07,0,.27,0,0,.79,.52,.59,.25,.23,.74,.01,.36,.02,0,.87,.01,.14,.66,.58,.85,.04,.03,.24,.01,.15,.65,0,0,.01,.42,.01,.44,.01,.12,.02,.12,.04,.9,.39,.01,.13,.13,.89,.23,.99,0,0,.83,0,.86,.37,.01,.13,.96,.17,.03,.18,0,.86,.6,.4,.06,.01,.3,.32,.4,0,.37,.42,.07,.07,.35,.6,.01,.65,.11,.88,.82,.61,.9,0,0,.8,.92,.35,.02,.98,.16,.05,0,.74,.09,0,.08,.77,.72,.13,.07,.19,.2,0,0,.04,.01,0,0,.13,0,.13,.29,0,.78,.01,.58,.09,.39,.14,.47,.8,0,.21,.52,.3,.04,.08,0,.75,.54,0,.01,.01,.58,.22,.68,0,.84,.12,.04,0,0,.73,.12,0,.3,.7,.58,0,0,.88,.51,.17,0,0,.02,.9,.46,.48,0,.13,.03,.72,.72,0,.38,.76,0,.84,.04,.16,.35,.6,.2,.51,.94,.81,.01,.03,.39,.03,.2,.53,0,0,.38,0,.09,.38,.09,.48,.71,.71,0,.16,.04,.62,.79,.87,.01,.15,.01,0,.16,.07,.29,.62,.57,.01,.01,.57,.89,.02,.91,.79,.6,.01,.01,0,0,0,0,.9,.65,.52,.58,0,.4,.02,0,.15,.95,.78,0,.31,0,.06,.99,0,.14,.13,.66,.55,.19,0,.05,.12,.09,.15,.01,.32,.26,0,0,.29,.28,0,0,.52,.8,.01,.13,0,.09,.31,.54,0,.01,.44,0,0,.23,.05,.85,.01,.14,.51,0,.25,.78,.35,1,.02,.88,.09,.18,.03,.77,.37,.93,.15,.19,.55,.36,0,.74,.01,.71,.03,.05,.04,.03,.15,.96,0,.06,.02,.96,.85,.1,0,.02,.1,.16,0,.06,0,.07,.33,.46,0,.02,.53,0,.24,.02,.87,0,.32,.02,.69,.64,.29,.28,.08,0,.93,.32,.03,0,.19,.33,.51,.02,.42,.17,.01,.61,.21,0,.01,.2,.27,.19,.81,.06,.62,.74,.78,.97,.06,.27,.75,.82,.61,.26,.32,.79,.65,0,0,0,.42,.66,.7,.23,.19,.1,.23,.43,0,.72,.02,.27,.64,.5,.01,.14,0,.4,.07,.57,.08,.01,0,.01,.07,.1,.24,.9,.32,0,.11,.27,.02,0,0,0,.06,.05,0,0,0,.21,0,.09,.68,.09,.09,.97,.97,.12,0,.46,.15,.47,0,.16,.24,.53,.8,.01,.11,0,.01,0,0,.72,.05,.01,.06,0,.22,.01,.21,.01,0,0,.44,.39,.01,.39,.38,0,.18,0,.9,.02,.14,0,.95,.12,.01,0,.24,.01,.47,.55,.01,.14,.06,.02,.11,.61,.02,0,.04,.88,.97,.11,0,.3,.53,.04,0,.03,.89,.08,.01,.16,.96,.77,0,0,0,.05,.09,.03,0,.17,0,.92,.37,.16,.88,.58,0,.1,.54,.01,.84,.39,.03,.27,0,.36,.72,.33,.54,0,.28,.96,.2,0,0,0,0,.02,.01,0,.5,.85,.7,.02,.31,.83,0,.07,.43,0,.36,.84,.62,.4,0,.23,.05,0,.01,0,.04,0,.65,.01,.02,.11,.5,.87,.63,.22,.02,.01,.01,0,.43,.01,.53,.54,.72,.08,0,.76,.03,0,.27,0,.03,0,.02,.01,.05,0,0,.05,.5,0,.43,.02,.62,0,.73,.45,.01,0,.31,.94,0,0,.02,.54,.01,1,.73,.15,.52,0,.49,.03,.06,0,.05,.29,.58,0,0,.12,.32,.26,1,.36,.6,.29,0,0,.65,.02,.59,.64,0,.01,.46,.07,.02,.32,.49,.35,0,.14,.01,.46,.68,.79,.23,.05,.85,.06,.9,.76,.36,0,.86,0,.82,0,.1,.92,.33,.05,0,.07,0,.8,.88,.02,.77,0,.92,.56,.25,.85,.44,0,.89,.06,.01,.09,0,0,0,.01,.27,.13,.4,.06,.3,0,.6,0,.15,0,.59,.82,.03,.22,.53,.81,0,.38,.02,.27,.03,.02,.11,.77,.9,.01,.32,.01,.27,.54,.01,0,.01,.11,.34,.89,.72,.42,.31,0,.76,0,.55,.01,.07,.04,.98,.18,.62,.82,.02,.01,.11,0,.89,.2,0,.01,.86,.07,0,0,.04,.9,.65,.79,.01,.07,.03,.72,.01,.99,0,0,0,.57,.03,.33,.82,.01,.05,.8,.04,0,0,.63,.86,.05,.56,.04,.05,.06,.01,.09,.6,.22,0,0,.47,.14,.23,.44,0,.26,.68,.29,.5,.24,.24,.21,.49,0,.61,.05,0,.01,.03,.62,0,.07,.54,0,.48,0,.22,.63,.07,.03,.38,.74,.53,.05,.13,0,.48,.5,.61,.05,.71,0,.81,.05,0,.39,0,.81,.05,.05,.45,.05,.87,.46,.49,.24,0,.16,.12,0,.12,.33,.05,.01,.12,.18,.18,0,0,.07,.11,.01,0,.52,0,0,.29,.6,0,.13,.11,0,.01,.39,0,.09,.31,0,.01,.11,.18,.03,.02,.28,.99,.37,.1,.4,0,.6,.73,.87,.83,.51,.09,0,.5,0,.82,0,.92,.01,.02,0,.29,0,0,.07,0,.85,.08,.19,.42,0,.27,0,.24,.88,0,0,0,.01,.02,.06,0,.95,.49,.01,.29,.1,.02,.22,.02,.35,0,.79,.57,.02,0,.07,.15,.06,0,.07,.02,.28,.01,0,.83,.97,0,.03,.43,.75,.55,0,0,.76,0,0,.06,.08,.02,.19,0,.05,0,.02,0,0,.18,0,0,0,0,.84,.72,.07,.21,0,0,0,.7,0,.87,.02,.53,.96,.48,.94,.49,.73,.62,.02,.62,.18,.2,.99,.83,.01,0,0,0,.68,0,.04,.03,.28,.01,.84,.43,.08,.27,.08,.83,.05,.63,.35,0,.78,.29,.02,.41,.02,.15,0,.01,.64,0,0,0,.08,.75,.01,.69,.76,.9,.04,.03,.09,.16,0,.37,.01,.5,.59,.02,.98,0,.47,0,.45,.1,.1,.1,.27,0,.39,.01,.1,.08,0,.05,.12,0,0,.95,0,.77,.34,.13,.69,0,0,.53,.33,.47,.98,0,.33,.01,.3,.01,.19,0,.17,.53,.32,0,.79,.01,.44,.09,.19,.53,.22,.98,.2,.38,0,0,.3,.82,.06,.73,.53,0,.05,.33,0,.42,.52,.36,.71,.24,.01,.86,.27,.01,.17,0,.49,.54,0,.75,0,.71,0,.08,.49,.07,.03,.16,.92,.47,0,.51,.05,.63,0,.25,.43,.6,.05,.94,0,.79,.84,0,0,.74,0,.63,.16,0,.01,.19,.46,.01,.96,.92,.04,.27,.04,0,.31,.24,.31,0,.34,.27,.13,.67,.71,0,.01,0,0,0,0,0,.23,.13,.47,.27,.27,.46,.01,.37,.1,.18,.06,.23,.68,.02,0,0,0,.05,0,.33,.01,.27,.16,.78,0,0,.07,.11,.04,0,.88,1,.53,.63,0,.96,.92,0,.01,.36,.92,.01,.01,.79,.5,.66,.97,.01,0,.03,.94,.94,.13,.37,.29,.89,.45,.32,.04,.78,.39,.41,.22,.73,.15,0,.84,.05,.03,.11,0,0,.24,0,.06,0,.89,0,.75,.91,.01,.36,0,.02,.19,0,.9,.8,.01,.11,0,.02,.8,.01,.14,.37,.61,.42,.08,.03,.2,0,0,.02,.58,.86,.54,.87,0,.17,.82,.01,.02,0,0,.01,.22,.53,0,0,.62,.05,.38,.01,0,0,.37,.96,.03,.74,.01,.02,.01,0,0,.05,0,0,.07,0,.6,0,.63,0,.38,.76,.85,0,.19,.44,.13,0,.1,.28,.09,.88,.3,0,0,.33,.17,.21,0,.15,0,.01,0,.01,.83,.58,0,0,0,.97,0,.89,.15,0,0,0,.69,.2,0,0,0,.54,0,.6,0,0,.2,0,0,.54,.76,.06,.69,.03,.01,.3,.03,.01,.38,0,.17,.02,.88,0,.45,0,0,.45,.19,1,0,.02,.81,.58,.01,.47,.01,.35,.03,.38,.41,.06,.84,.23,.5,.07,0,.02,.07,.06,.26,.6,.47,.08,.02,.18,.57,.01,.59,.92,.44,0,.2,.49,.01,0,.04,.6,0,.69,.39,.13,0,.19,0,.43,.06,0,.7,.55,.02,.57,.4,.91,.47,.66,.33,.01,.68,.59,.59,.3,.04,.01,1,0,.44,.9,.01,.59,.02,.04,.27,0,.09,.87,.72,0,.51,.03,0,.63,.51,0,.14,.01,.77,.86,.06,.09,.32,.7,.01,.02,0,0,.02,.02,0,0,.02,.71,.3,.32,.01,.23,0,.52,.11,0,.17,.35,.61,.59,.45,.02,.22,.17,.37,.08,.8,.05,.13,.56,.23,0,.02,.93,.93,.56,1,.02,.02,.27,.03,.04,.73,.34,.12,.04,.41,.42,.03,.39,0,.72,.03,.59,.55,.64,0,.41,.2,.96,.08,.03,.29,.77,0,.39,.79,.04,.83,.06,.01,.02,.31,.98,.21,0,.02,.11,.14,0,.89,.56,.54,.82,0,0,0,.03,.79,0,.71,.86,0,.56,0,0,0,.95,.75,1,.98,.04,0,0,.01,.82,.04,.14,0,0,.01,.72,.96,.21,.01,.09,.92,0,.69,.32,.53,.82,.03,.39,.14,.86,.34,.41,.39,.01,.01,.73,.67,.01,.73,.02,.17,.12,.67,.16,.04,.5,.67,0,0,.23,.8,.85,.07,.39,.32,.34,0,.4,.69,.45,0,.61,0,.51,.01,0,.63,.08,.08,0,0,.3,.01,.88,.55,.14,0,.91,.62,.84,.82,0,.29,.44,.02,.45,0,.65,.24,.08,.1,.01,0,.2,.89,0,.39,.87,.08,.16,.3,0,.34,.17,.57,.8,.12,0,.61,.09,.81,.12,.22,.93,.27,.55,.73,.11,.01,0,0,.85,.09,.36,.02,.14,.29,.05,.03,0,.97,.2,.14,.22,0,.09,.02,.59,0,0,.01,0,.19,.47,.17,.42,.61,.41,.6,0,0,.13,.01,.63,.6,.03,.51,0,.08,.49,.69,0,.44,0,.3,.05,.27,.41,.04,.11,.98,.47,.45,.66,.03,0,.06,.01,0,0,.36,.28,.09,0,0,0,.31,.11,.87,.11,.02,.24,.04,.61,.15,.79,.07,0,.24,.17,.71,0,.18,.77,.05,0,.2,.11,0,.02,.87,0,.02,.12,.01,0,0,.24,.62,.81,.95,.29,.52,.01,.94,.01,.99,.22,.38,.28,.52,.09,.19,.04,.29,.66,.5,.66,.9,.23,.09,0,0,0,.2,.42,.01,0,0,0,.02,.74,.38,.01,.05,.01,.23,.54,.03,0,0,0,0,.34,.36,.25,0,.33,.04,.01,0,0,.4,.05,.52,.01,0,0,0,.19,.16,.28,.2,.55,.08,.64,.18,.48,.98,.37,.79,.21,0,.08,0,.02,.94,.14,.03,.02,.01,.85,.56,0,.2,.86,.66,.07,0,0,0,0,0,0,.4,.93,.49,.17,.93,.91,0,.01,.07,.01,0,.45,.39,.2,.56,.62,.12,.37,.3,.41,1,.1,.3,.47,.01,.68,.39,.51,.03,.01,0,.02,.71,0,0,0,.13,.13,.42,.5,.45,0,.03,.89,.42,.33,.04,0,.28,0,.2,.75,.11,0,0,0,.81,0,.01,.67,0,.12,.03,0,.01,.01,.05,.55,0,.12,.33,0,.75,.13,.13,.03,.19,0,.04,.03,0,.75,.04,.58,.03,.53,.54,.17,.35,.01,.23,0,.12,.14,.1,.11,0,0,.17,.02,.6,.01,.01,0,0,.89,.01,0,.77,.01,.09,0,.01,0,0,0,.37,.09,.01,.25,.01,.69,0,0,.72,.38,.19,0,.08,.43,.37,.05,0,.02,.32,.48,.74,.07,.71,0,.28,.29,.57,.61,.25,.64,.08,.02,.42,.65,.09];export{a as pvalData};
