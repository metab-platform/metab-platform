const a=[0,.53,.59,.26,.73,0,.88,.01,.86,.52,.65,0,0,.34,.98,.05,.03,.72,0,0,.9,.57,.91,.99,.98,.8,.51,.34,.2,.25,.32,.81,.64,0,.09,.01,.24,.82,.09,.71,.53,.77,.03,.05,.01,.72,.43,0,.42,.68,.18,0,.29,.51,.05,.97,.51,0,.32,.94,0,.88,.41,.78,.5,.4,.38,.42,.97,.59,.87,.55,.19,.08,.61,0,.13,0,.99,.14,.32,.88,.64,.63,.99,.05,.99,.04,.48,.54,.16,.08,.37,.43,.05,0,.71,0,.99,0,.94,.24,.17,.65,.67,.01,.57,.1,.35,.99,0,.58,.25,.04,.98,.87,.52,.86,.5,.9,.05,.07,0,.73,.18,1,.88,.05,.52,.8,.24,.94,.9,.74,0,0,.22,.04,.66,0,.66,0,.71,.62,0,.15,.22,.03,.31,.89,.2,.27,.18,0,.08,.15,.11,0,.32,.97,.62,.31,.03,.73,.27,.03,.59,.92,.04,.77,0,.92,.22,.29,.78,.88,.55,.17,.01,.59,.89,.03,.31,.26,.84,0,0,0,.34,.01,.15,.01,0,.03,.26,.48,.6,0,0,1,.99,.72,.85,.01,.73,.27,.36,.37,.09,0,.29,.99,.02,.8,0,.07,.46,.39,.91,.1,.39,.95,.91,.25,.28,.91,.08,.97,0,.54,.83,.83,.39,.89,0,0,.51,.65,.57,.87,.43,.61,.97,.24,.19,.82,.87,.44,.08,.15,.06,.02,.34,.29,.56,.02,0,.12,.81,.87,.72,.41,.21,.75,.1,.57,.98,.75,.49,0,.03,0,.88,.96,.39,.08,.26,0,.92,.53,.34,.02,.56,.03,.86,.84,0,.48,0,.45,.86,.14,1,.9,.32,.05,.84,0,.17,.93,.13,.7,.6,.16,0,.11,.17,.24,.39,.48,.86,.17,0,0,.53,.96,.56,.74,.57,.11,.97,.22,.93,.94,.87,.9,.34,.46,.89,.75,.68,.6,.69,0,.29,.11,.85,.3,.64,.67,.14,.57,.21,.61,.98,.87,.22,.08,.73,.61,.29,0,0,.82,.72,.77,.81,.9,.58,1,.02,.13,.55,0,.94,.12,0,.86,.03,.48,.97,.6,.84,0,0,.02,.01,.86,.49,.02,.09,.8,.86,.65,.57,.46,.59,.61,.98,.89,.49,0,.23,.14,.03,.8,.44,.3,.74,.82,.42,.83,.7,.16,.55,.05,.74,.76,.52,.81,.48,.18,.16,.71,.04,0,.92,.63,.22,0,0,.03,.15,0,.34,.89,.62,.01,.74,.81,.21,.01,.45,0,.15,.97,.59,.86,.82,0,.4,.69,.8,0,.54,.22,.89,.46,0,.02,.64,.29,.6,.4,.49,.87,.05,.56,0,.16,.48,.45,.02,0,.67,.81,.3,0,.2,.49,.25,.74,0,0,.75,.57,.29,.36,.32,.05,.18,.95,.34,.26,.88,.81,.35,.86,.66,.74,.79,.01,.47,.48,.08,.85,.54,.05,.95,.42,.63,.3,.89,.37,.47,.54,.01,.26,.63,.05,.35,.51,.89,.28,.72,.98,0,.38,0,.52,.86,.85,.15,.15,.1,0,.55,0,.38,.14,.27,.51,.52,.38,0,0,.82,.24,.15,.12,.38,.32,0,.13,.42,.62,0,.08,.61,.54,0,.99,.74,.28,.56,0,.37,.48,.69,.83,.85,.92,.32,.18,.79,.08,.8,.02,0,0,.86,.63,.28,.83,.98,.91,.16,.06,.38,.73,.16,0,.48,.36,.37,.68,.94,.14,.47,.51,.07,.64,.18,.47,.99,0,.84,.53,0,.9,.97,.48,.87,0,.88,.1,.9,.75,.03,.33,.77,.12,0,0,0,.4,.64,.44,.35,0,.43,.47,.18,.94,.3,0,.6,.72,.32,.99,0,.11,.01,.07,.63,.18,.42,.52,.04,.01,.01,.47,.86,.03,.33,.75,.51,.57,0,.51,0,.03,.94,.75,.55,.1,.73,.69,.03,.41,.98,.45,.79,.07,.47,0,.18,.61,.25,.3,.64,.03,.84,.15,.04,.76,.66,.92,.42,.01,.55,.18,.73,.02,0,0,.05,.97,.47,.06,.01,.67,.58,0,0,.78,0,0,.63,.05,.9,.36,.02,.09,.37,.01,.05,.02,0,.33,.65,.65,.17,.35,.4,.65,.95,.91,.23,.52,.07,.47,.16,0,.57,.01,.13,.55,0,.65,.01,.33,.94,.27,.35,.74,.9,.23,.67,.02,.84,.48,1,.08,.27,0,.67,.98,.57,.03,0,.12,.62,0,.7,.15,.08,.45,0,.5,.34,.19,.48,.36,.28,.73,.66,0,.18,0,.51,.19,.68,0,.74,0,.62,.11,.8,.81,.92,.07,0,.51,.61,.34,.89,0,.94,.07,.27,.54,.35,.72,.96,.84,.85,.54,.87,.54,.09,0,.01,.16,.02,.49,.47,.85,.3,.13,.57,.49,.83,.96,.58,.71,.03,.17,.81,.78,0,0,.78,0,.01,.91,.37,.02,.85,.01,.67,.68,0,.98,.39,.95,.23,.01,0,.26,.04,.35,0,.84,.34,.43,.33,.79,.42,.05,.75,.75,.02,.08,.59,.09,.04,.26,.04,.38,.04,.61,.06,.52,.11,.94,.96,0,.72,.87,.89,.07,.25,.68,.06,.41,.32,.62,.91,0,.18,.07,.08,.89,.07,.27,.01,.46,.43,.97,.66,0,0,.02,.4,0,.07,0,.68,.53,.26,.87,.97,.62,0,.88,0,.9,0,.33,0,.12,.36,.38,.43,.8,0,.33,.97,.2,.01,.05,.49,.4,.76,.88,0,.74,.99,.8,.01,.95,.16,.72,.45,.47,.06,.47,0,.85,0,.42,.82,.12,.67,.79,.37,.3,.6,.6,.83,.68,.12,.13,.28,.93,.74,.93,.96,.35,.42,.51,.72,.97,.62,.87,.88,.37,.04,.91,0,.01,.99,.96,.71,.67,.62,.8,.41,.38,.68,.28,.12,.24,.46,.06,.96,0,0,0,.31,.84,.33,.82,.18,.38,.86,.09,.93,.06,.43,.07,.9,0,0,.29,0,.02,.05,0,.61,0,.33,.03,0,.19,.33,0,.16,.15,.83,.06,.11,.67,.39,.04,.33,.21,0,.06,.33,.02,.18,.62,.1,.04,.54,.85,.56,.6,.56,.95,0,.22,.02,.8,.03,.84,.34,.18,.14,.16,.4,.58,0,.04,.87,.03,.05,.95,.01,0,.09,.66,.22,.06,.67,.67,.97,.52,.12,0,0,.87,.99,.9,1,.94,0,.57,0,.48,.18,.77,0,.25,.49,.01,.16,.59,.65,.83,.69,.26,.47,.32,.83,.15,.43,.77,.02,.26,0,.23,.98,.01,.45,.13,.36,.14,0,.16,.24,.03,.81,0,.16,.88,.04,.69,.17,.61,0,0,.17,0,.69,.34,.16,.54,.87,.27,.87,.02,0,.85,.57,.52,0,.21,.86,0,.02,.9,.37,0,.63,.19,.37,.15,0,.04,0,.72,.02,.97,0,.55,0,0,.63,.57,0,.5,.31,.75,.56,.25,.42,.32,.19,0,.07,.59,.35,.1,.52,.07,.83,.78,.97,.25,0,.88,.62,0,.74,.55,.42,.56,.44,1,.5,.06,.69,0,.71,.28,.6,.68,.23,0,0,.41,.92,.34,.17,.19,.9,.17,.4,0,0,.79,.78,.68,0,.96,.99,.08,.02,.62,.26,0,0,0,.02,.01,.04,.15,.09,.26,.65,.94,.98,.15,.27,.03,0,0,.8,.85,.43,.04,0,.2,0,.9,.83,0,.59,.46,0,.01,0,0,.23,.01,.18,.27,0,.78,0,.92,0,0,.11,.2,.06,0,.92,.99,.18,.44,.34,.93,.57,0,.36,.74,.28,0,.29,.04,.28,0,.8,.78,.01,0,.07,.05,.62,0,.94,.99,.19,.34,.45,.51,.93,.02,0,.28,.31,.21,0,.52,.98,.72,.9,.81,.28,.55,.01,.87,.09,.93,.82,0,.22,.5,0,.73,.5,0,.58,.81,.25,.05,.25,.43,.92,.63,.48,.94,.14,.04,.35,.06,.73,0,.04,.24,.66,.27,.03,.09,0,.94,.01,.46,.15,.65,0,.27,.67,.26,.24,.56,.06,.16,0,.78,.64,.9,.08,.68,.1,.27,.27,.28,.45,.83,0,.31,.95,.6,.07,.35,.59,.61,.73,.61,.94,.89,0,.33,.04,.32,0,.33,.02,.36,.74,.31,.28,0,.95,.71,.86,.38,.93,.59,.83,.34,0,1,.04,.01,.82,.94,0,.79,.13,.82,.68,.88,.03,.32,.8,0,.02,.09,.81,.15,.76,.77,.13,.54,0,.36,.64,.62,.95,.51,.05,0,.05,0,.45,.88,.52,.93,0,.53,.32,.5,.59,.25,0,.32,.3,.91,.85,.94,.85,.01,.67,.02,.38,.31,0,0,.02,.31,.36,.08,.6,.16,.11,.1,.59,.68,.29,.18,.29,.37,.27,.03,.91,.66,.02,.4,.85,.61,.58,.63,.23,.01,.98,.35,.25,.27,.36,.56,.13,.01,.96,.14,.94,.15,.64,.06,.4,.57,.44,.67,.01,0,.7,.77,.57,.97,.03,.01,.89,.79,.72,.21,.85,.35,.48,.01,.44,.39,.48,0,.14,.62,.11,.17,.93,.25,.16,.48,.51,.71,.1,.96,.91,.35,.88,.56,.64,.7,.04,0,.47,.87,.41,.44,.78,.89,0,.55,.72,.64,.82,.24,.15,.12,.38,.26,.22,.06,.1,.69,.7,.06,.73,.93,.82,.89,0,.49,.94,.51,.46,.53,.81,.7,.61,.6,.89,.25,.66,.55,.92,.57,.66,.83,.51,.89,.33,.92,.68,.97,.17,.63,.13,.99,.29,.69,.64,.31,.41,.64,.52,.22,.74,.9,.03,.83,.7,.02,.07,.84,.88,.86,0,.56,.11,0,.26,.42,.02,.08,.67,.61,.75,.44,.1,0,.96,.03,.45,.63,.38,.91,.34,.86,.37,0,.93,.94,.48,.43,.86,.46,.55,.7,0,.89,.26,.03,.69,.01,.35,.7,.14,.82,.98,.84,.76,.58,.71,.75,.46,.9,.65,.13,.69,.62,.87,0,.25,0,.28,.2,.47,.79,.59,.09,.52,.37,.27,.46,.29,.99,.02,.7,.26,.74,.92,.61,.89,1,.16,.98,.9,.84,.42,.62,.95,.22,.13,.06,.71,.31,.62,.63,.63,.28,.2,.82,.24,.63,.26,.96,.98,.85,.56,.66,.57,.08,.44,0,0,.74,.79,.03,.08,.37,.62,.32,.78,.81,.52,.8,0,.11,.84,0,.59,.33,.68,.25,.38,.8,.18,.62,.43,.49,.13,.29,.87,1,.39,.13,.31,.48,.31,.27,.17,.33,.88,.02,.59,.74,.01,1,.97,.03,.86,.98,.08,.74,.67,.68,.93,.87,.38,.22,.36,.55,.95,.89,.78,0,.53,.76,.96,.04,.96,.96,.14,.9,.95,.18,.16,.49,.31,.79,.72,.18,.06,0,.19,.48,.47,.66,.84,.99,.27,.28,.75,.57,.33,.27,.81,.61,0,.37,.63,.19,.05,.12,.21,.23,.75,.03,.35,.47,.47,0,0,.62,.41,.67,.09,.86,0,.49,.28,.78,.11,.5,.86,.04,.67,.56,.97,.75,.22,.11,.64,.52,.99,0,.94,.31,0,.6,.64,0,.9,.69,.74,.55,.62,.33,.63,.31,.05,.3,.88,.26,.53,.24,0,.19,0,.03,.15,.38,.23,.26,.93,.08,.49,.35,.48,0,.91,.02,.5,.62,0,.01,.76,.2,.08,0,.28,.83,.87,.86,.89,.02,.31,.02,.06,.4,.14,.82,0,.97,0,.31,.29,.1,0,.36,.24,0,.78,.25,0,.6,.18,.73,.03,.79,.06,.53,0,0,.51,.2,.33,.68,.61,.25,.29,.65,.53,.75,.8,0,.28,.88,.71,.11,.05,0,.18,0,.74,.2,.46,.53,.84,.05,.24,.29,.71,0,.07,.25,0,.18,.07,.48,.64,.42,.28,.34,.07,.23,.63,.74,.81,.12,.58,.66,.9,0,.07,.37,.49,.85,0,.32,.94,.66,.03,.01,.35,0,.97,.39,.72,0,.27,.03,.57,.43,.47,.73,.77,.46,.52,.57,.86,.24,.05,.73,.09,.73,.71,.94,.96,.61,.74,.7,.45,.29,.57,.53,.52,.8,0,.85,.92,.08,.25,.1,.62,.23,.7,.37,.97,.18,.29,.26,.22,.01,.6,.68,.11,0,.23,0,0,.24,.48,.75,.77,0,.03,.18];export{a as pvalData};
